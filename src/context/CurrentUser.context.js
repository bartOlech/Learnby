import React, { Component } from 'react';
import firebase from '../Firebase.config';

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
        selectedAnnouncemenUserData: []
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
        firebase.addLoginDataToFirebase(name, email, photo, 'Google')
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
          firebase.addLoginDataToFirebase(name, email, photo, 'Facebook')
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
    


// DODAĆ ZAPISANIE USERA W BAZIE GDY REJESTRUJE SIE PRZEZ EMAIL (NA RAZIE JEST TYLKO PRZEZ SOCIAL ZAPIS)!!!



    getAnnouncementById = (id) => {
        const{ selectedAnnouncementData } = this.state;
        firebase.getDataFromFirestore('Announcements').doc(id).get().then(snapshot => {
            selectedAnnouncementData.splice(0)
            selectedAnnouncementData.push(snapshot.data())
            this.setState({
                selectedAnnouncementData
            })
        }).then(
            
        )   
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }

    getAnnouncementByIdRepeatToRefreshPage = (id) => {
        const{ selectedAnnouncementData, selectedAnnouncemenUserData } = this.state;
        
        firebase.getDataFromFirestore('Announcements').doc(id).get().then(snapshot => {
            selectedAnnouncementData.splice(0)
            selectedAnnouncementData.push(snapshot.data())
            
            // get the user data selected announcement
            firebase.getDataFromFirestore('user').doc(snapshot.data().UserId).get().then(snapshot => {
                // console.log(snapshot.data())
                selectedAnnouncemenUserData.push(snapshot.data())
                selectedAnnouncementData.splice(0, selectedAnnouncementData.length -1)
            }).then(
                
            )
        }).then(

        )   
        .catch(err => {
            console.log('Error getting documents', err);
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
            selectedAnnouncemenUserData} = this.state;
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
                        selectedAnnouncemenUserData
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