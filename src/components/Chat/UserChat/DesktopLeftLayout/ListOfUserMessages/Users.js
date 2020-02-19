import React, { Component } from 'react'
import styled from 'styled-components';
import User from './User/User';
import firebase from '../../../../../Firebase.config';

const Container = styled.div`

`

class Users extends Component{
    state = {
        usersListMap: new Map(),
        usersData: new Map()
    }

    componentDidMount() {
        const { usersListMap, usersData} = this.state;
        // get messages ID
        firebase.isInitialized().then(() => {
            firebase.getDataFromFirestore('user').doc(firebase.getCurrentUid()).get().then(doc => {     
                for (const [key, value] of Object.entries(doc.data().MessagesId)) {
                    usersListMap.set(key, value)
                }
            }).then(() => {
                // Get and save to variable the user data
                for (let [key, value] of usersListMap.entries()) {
                    firebase.getDataFromFirestore('user').doc(key).get().then(doc => {
                        usersData.set(key, doc.data())
                        this.setState({
                            usersData,
                            usersListMap
                        })
                    })
                }
            })
        })
    }

    showUsers = () => {
        const { usersData } = this.state;
        const list = [];

        for (let [key, value] of usersData.entries()) {
            // console.log(typeof value.Name)
            
        list.push(<User messageId={key} background={key === this.props.userId? '#EFEFEF' : '#fff'} name={value.Name} image={value.PhotoUrl || value.photoUrl}></User>)
        }
        return list
    }

    render () {
        return (
            <Container>
                {this.showUsers()}
            </Container>
        )   
    }
}

export default Users;