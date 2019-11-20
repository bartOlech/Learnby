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
        announcementComments: [],
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
        const{ selectedAnnouncementData, selectedAnnouncemenUserData, announcementComments } = this.state;
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
            snapshot.data().CommentsId.forEach((el, index) => {
                if(index === 0) {
                    announcementComments.splice(0)
                }
                
                firebase.getDataFromFirestore('Comments').doc(el).get().then(snapshot => {
                    announcementComments.push(snapshot.data())
                    // remove duplicate elements
                    this.setState({
                        announcementComments: _.uniqBy(announcementComments, 'UniqueId')
                    })
                }).then(
                )
                .catch(err => console.log('Error getting documents', err))                
            })
        }).then(
        )   
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }

    getAnnouncementByIdRepeatToRefreshPage = (id) => {
        const{ selectedAnnouncementData, selectedAnnouncemenUserData, announcementComments } = this.state;
        
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
            snapshot.data().CommentsId.forEach(el => {
                firebase.getDataFromFirestore('Comments').doc(el).get().then(snapshot => {
                    
                    announcementComments.push(snapshot.data())
                    this.setState({
                        announcementComments: _.uniqBy(announcementComments, 'UniqueId')
                    })
                }).then(
                )
                .catch(err => console.log('Error getting documents', err))
            })

        }).then(

        )   
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }

    sendComment = (text, uid) => {
        firebase.sendDataToFirestore("Comments").doc().set({
            Content: text,
            Creator: uid,
            Likes: [],
            UniqueId: uniqid(),
            UserComments: 'TxVantf16ZSTCmsEiN9N'
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(err => {
            console.error("Error writing document: ", err);
        });
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
            announcementComments,
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
                        announcementComments,
                        sendComment: this.sendComment
                        
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