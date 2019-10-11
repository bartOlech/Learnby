import React, { Component } from 'react';
import firebase from '../Firebase.config';

const CurrentUserContext = React.createContext();

export class CurrentUserProvider extends Component {
    state = {
        user: '',
        firebaseInitialized: ''
    }

    logout = () => {
        firebase.logout()
        this.setState({
            user: ''
        })
    }

    componentDidMount() {
        firebase.isInitialized().then(val => {
            this.setState({
                firebaseInitialized: val,
                user: firebase.getCurrentUser()
            })
          })
    }

    render() {
        const { children } = this.props;
        return (
            <CurrentUserContext.Provider
                value={{
                    user: this.state.user,
                    logout: this.logout
                }}
                >
                    {children}
            </CurrentUserContext.Provider>
        )
    }
}

export const CurrentUserConsumer = CurrentUserContext.Consumer;