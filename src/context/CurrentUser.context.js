import React, { Component } from 'react';
import firebase from '../Firebase.config';

const CurrentUserContext = React.createContext();
const FindUserContext = React.createContext();

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
        listID: []
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
        const{ announcementsArray, listID } = this.state;

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
                listID.push(doc.id)
            })   
        }).then(() => {
            this.setState({
                announcementsArray
            })
        })
    }

    render() {
        
        const { children } = this.props;
        const { user, loading, announcementsArray, listID } = this.state;
        return (
            <CurrentUserContext.Provider
                value={{
                    user,
                    logout: this.logout,
                    loginWithGoogle: this.loginWithGoogle,
                    loginWithFacebook: this.loginWithFacebook,
                    loading,
                    announcementsArray
                }}
                >
                    <FindUserContext.Provider 
                        value={{
                            announcementsArray,
                            listID
                        }}
                    >
                        {children}
                    </FindUserContext.Provider>
            </CurrentUserContext.Provider>
        )
    }
}

export const CurrentUserConsumer = CurrentUserContext.Consumer;

export const FindUserConsumer = FindUserContext.Consumer;