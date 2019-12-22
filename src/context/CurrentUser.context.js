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
        commentsArray: [],
        addAnnouncementLayoutNumeber: 0,
        addAnnouncementData: {
            subject: '',
            levelOfKnowledge: 3,
            remote: false,
            name: '',
            surname: '',
            city: '',
            age: 0,
            sex: '',
            description: '', 
            regulations: false
        }
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
                userArray.push(doc.data().AnnouncementCreator)

                listID.push(doc.id)
            })   
        }).then(() => {
            this.setState({
                announcementsArray,
            })
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

            // get the user from firestore
            selectedAnnouncemenUserData.splice(0)
            selectedAnnouncemenUserData.push(snapshot.data().AnnouncementCreator)

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
            
            // get the user from firestore
            selectedAnnouncemenUserData.push(snapshot.data().AnnouncementCreator)

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

    setAnnouncementLayout = (val) => {
        const { addAnnouncementLayoutNumeber } = this.state;
            if(val) {
                this.setState({
                    addAnnouncementLayoutNumeber: addAnnouncementLayoutNumeber + 1
                })
            } else {
                if(addAnnouncementLayoutNumeber !== 0) {
                    this.setState({
                        addAnnouncementLayoutNumeber: addAnnouncementLayoutNumeber - 1
                    })
                }
        }
    }

    setAnnouncementData = (name, value) => {
        this.setState(prevState => ({
            addAnnouncementData: {                   // object that we want to update
                ...prevState.addAnnouncementData,    // keep all other key-value pairs
                [name]: value       // update the value of specific key
            }
        }))
    }

    // clear the announcement form
    clearAnnouncementData = () => {
        this.setState({
            addAnnouncementLayoutNumeber: 0,
            addAnnouncementData: {
                subject: '',
                levelOfKnowledge: 3,
                contact: false,
                name: '',
                surname: '',
                city: '',
                age: 0,
                sex: 'M',
                description: ''
            }
        })
    }

    // Send announcement to the firestore
    sendAnnouncementToFirestore = (userData, userId) => {
        const{ addAnnouncementData } = this.state;
        // firebase.sendDataToFirestore("Announcements").doc().set({
        //     AnnouncementCreator: {
        //         Email: userData.email,
        //         UserName: userData.displayName,
        //         PhotoUrl: userData.photoURL,
        //         Sex: addAnnouncementData.sex,
        //         UserId: userId
        //     },
        //     Comments: {},
        //     Description: addAnnouncementData.description,
        //     LevelOfKnowledge: addAnnouncementData.levelOfKnowledge,
        //     Remote: addAnnouncementData.remote,
        //     Place: addAnnouncementData.city,
        //     Subject: addAnnouncementData.subject,

        // })
        // .then(function() {
        //     console.log("Document successfully written!");
        // })
        // .catch(function(error) {
        //     console.error("Error writing document: ", error);
        // });
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
            commentsArray,
            addAnnouncementLayoutNumeber,
            addAnnouncementData
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
                        commentsArray,
                        addAnnouncementLayoutNumeber,
                        setAnnouncementLayout: this.setAnnouncementLayout,
                        addAnnouncementData,
                        setAnnouncementData: this.setAnnouncementData,
                        clearAnnouncementData: this.clearAnnouncementData,
                        sendAnnouncementToFirestore: this.sendAnnouncementToFirestore
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