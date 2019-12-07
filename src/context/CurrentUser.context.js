import React, { Component } from 'react';
import firebase from '../Firebase.config';
import _ from 'lodash';
import uniqid from 'uniqid';

const CurrentUserContext = React.createContext();
const FindAnnouncementContext = React.createContext();

export class CurrentUserProvider extends Component {
    state = {
        user: '',
        firebaseInitialized: '',
        name: '',
        email: '',
        photo: '',
        loading: false,
        ex: false,
        announcementsArray: [],
        userArray: [],
        listID: [],
        selectedAnnouncementData: ['1'],
        selectedAnnouncemenUserData: [],
        commentsMap: new Map(),
        commentsArray: []
    }

    logout = () => {
        firebase.logout()
        this.setState({
            user: '',
            name: '',
            email: '',
            photo: ''
        })
    }

    // Social login
    // Google
    loginWithGoogle = () => {
        firebase.signInWithGoogle().then(() => {
            this.setState({
                name: firebase.getCurrentUserAllData().displayName,
                email: firebase.getCurrentUser(),
                photo: firebase.getCurrentUserAllData().photoURL
            })
        }).then(() => {
            const { name, email, photo } = this.state;
        firebase.addLoginDataToFirebase(name, email, photo, 'Google', firebase.getCurrentUid())
        }).catch(error => console.log(error))
    }
    // Facebook
    loginWithFacebook = () => {
        firebase.signInWithFacebook().then(() => {
            this.setState({
                name: firebase.getCurrentUserAllData().displayName,
                email: firebase.getCurrentUser(),
                photo: firebase.getCurrentUserAllData().photoURL
            })
        }).then(() => {
             const { name, email, photo } = this.state;
          firebase.addLoginDataToFirebase(name, email, photo, 'Facebook', firebase.getCurrentUid())
        }).catch(error => console.log(error))
    }

    componentDidMount() {
        const{ announcementsArray, listID, userArray } = this.state;

        firebase.isInitialized().then(val => {
            this.setState({
                firebaseInitialized: val,
                user: firebase.getCurrentUser()
            })
          })

          

        // Get announcements from database
        firebase.getDataFromFirestore('Announcements').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                announcementsArray.push(doc.data())
                // get user info
                firebase.getDataFromFirestore('user').doc(doc.data().UserId).get().then((snapshot) => {
                    if (snapshot.exists) {
                        userArray.push(snapshot.data())
                    } else {
                        console.log("No such document!");
                    }
                }).then(() => {
                    this.setState({
                        userArray
                    })
                })
                listID.push(doc.id)
            })   
        }).then(() => {
            this.setState({
                announcementsArray,
            })
            userArray.shift()
        }).catch(error => {
            console.log("Error getting document:", error);
        });
    }

    getAnnouncementById = (id) => {
        const{ selectedAnnouncementData, selectedAnnouncemenUserData, commentsMap, commentsArray } = this.state;
        // get announcement data
        firebase.getDataFromFirestore('Announcements').doc(id).get().then(snapshot => {
            selectedAnnouncementData.splice(0)
            selectedAnnouncementData.push(snapshot.data())
            this.setState({
                selectedAnnouncementData
            })

            // get the user data selected announcement
            firebase.getDataFromFirestore('user').doc(snapshot.data().UserId).get().then(snapshot => {
                selectedAnnouncemenUserData.splice(0)  
                selectedAnnouncemenUserData.push(snapshot.data())
                // remove duplicate elements
                this.setState({
                    selectedAnnouncemenUserData: _.uniqBy(selectedAnnouncemenUserData, 'email')
                })
            }).then(
                
            ).catch(err => {
                console.log('Error getting documents', err);
            });

            // get comments from firebase
            commentsArray.splice(0)
            commentsMap.clear()

            for (const [key, value] of Object.entries(snapshot.data().Comments)) {
                commentsMap.set(key, value)
            }

            commentsMap.forEach((val, key) => {
                commentsArray.push({ key, value: val });
                // remove duplicate elements
                this.setState({
                    commentsArray: _.uniqBy(commentsArray, 'key')
                })
            }); 
        }).then(
        )   
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }

    getAnnouncementByIdRepeatToRefreshPage = (id) => {
        const{ selectedAnnouncementData, selectedAnnouncemenUserData, commentsMap, commentsArray } = this.state;
        
        // get announcement data
        firebase.getDataFromFirestore('Announcements').doc(id).get().then(snapshot => {
            
            selectedAnnouncementData.splice(0)
            selectedAnnouncementData.push(snapshot.data())
            
            // get the user data selected announcement
            firebase.getDataFromFirestore('user').doc(snapshot.data().UserId).get().then(snapshot => {
                selectedAnnouncemenUserData.push(snapshot.data())
                // selectedAnnouncementData.splice(0, selectedAnnouncementData.length -1)
                
            }).then(
                
            ).catch(err => {
                console.log('Error getting documents', err);
            });

            // get comments from firebase
            for (const [key, value] of Object.entries(snapshot.data().Comments)) {
                commentsMap.set(key, value)
              }

            commentsMap.forEach((val, key) => {
                commentsArray.push({ key, value: val });
            }); 

        }).then(

        )   
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }

    sendComment = (text, uid, announcementId, userData) => {
        const{ commentsArray } = this.state;
        const uniqueKey = uniqid()

        // remain only the first name of full name
        let firstName = userData.displayName.replace(/ .*/,'');

        // add a new comment to state
        commentsArray.push({
            key: uniqueKey,
            value: {
                Content: text,
                Creator: {
                    Email: userData.email,
                    UserName: firstName,
                    PhotoUrl: userData.photoURL
                },
                Likes: [],
                UniqueId: uniqid(),
            }
        })
        this.setState({
            commentsArray
        })

        // Update Comments in the firestore(add a new comment)
        firebase.getDataFromFirestore('Announcements').doc(announcementId).get().then(snapshot => {
            let commentsFromFirestore = snapshot.data().Comments
            
            const newComment = {
                Content: text,
                Creator: {
                    Email: userData.email,
                    UserName: firstName,
                    PhotoUrl: userData.photoURL
                },
                Likes: [],
                uniqueId: uniqueKey
            }

            // create a unique Id in the Object
            const map = new Map();
            map.set(uniqueKey, newComment)
            const newComentWithId = Object.fromEntries(map)

            // Merging two objects
            const MergedObject = Object.assign(newComentWithId, commentsFromFirestore)

            firebase.sendDataToFirestore('Announcements').doc(announcementId).update({
                Comments:  MergedObject
            })
        })
    }

    render() {
        
        const { children } = this.props;
        const { 
            user,
            loading, 
            announcementsArray, 
            listID, 
            selectedAnnouncementData, 
            userArray, 
            selectedAnnouncemenUserData,
            commentsMap,
            commentsArray
        } = this.state;
        return (
            <CurrentUserContext.Provider
                value={{
                    user,
                    logout: this.logout,
                    loginWithGoogle: this.loginWithGoogle,
                    loginWithFacebook: this.loginWithFacebook,
                    loading,
                    announcementsArray,

                }}
                >
                <FindAnnouncementContext.Provider 
                    value={{
                        announcementsArray,
                        listID,
                        getAnnouncementById: this.getAnnouncementById,
                        selectedAnnouncementData,
                        getAnnouncementByIdRepeatToRefreshPage: this.getAnnouncementByIdRepeatToRefreshPage,
                        userArray,
                        selectedAnnouncemenUserData,
                        sendComment: this.sendComment,
                        commentsMap,
                        commentsArray
                    }}
                >
                    {children}
                </FindAnnouncementContext.Provider>
            </CurrentUserContext.Provider>
        )
    }
}

export const CurrentUserConsumer = CurrentUserContext.Consumer;

export const FindAnnouncementConsumer = FindAnnouncementContext.Consumer;