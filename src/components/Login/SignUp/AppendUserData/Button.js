import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import firebase from '../../../../Firebase.config';
import { BrowserRouter as Router, useHistory} from 'react-router-dom';

const Container = styled.div`

`
const StartButton = styled.button`
    width: 260px;
    height: 56px;
    background-color: #4DB6AC;
    border: none;
    border-radius: 28px;
    color: #fff;
    font-family: ${FontStyle.family};
    font-size: 1.6em;
    cursor: pointer;
    outline: none;
    margin-top: 20px;
    margin-bottom: 20px;
`

const Button = (props) => {
    // create the history hook
    let history = useHistory();

    const appendRegisterData = () => {
        props.callbackValidation()

        if(props.nameVal !== '' && props.descriptionVal !== '' && props.sexVal !== '' && props.ageVal !== '') {
            firebase.updateUser().updateProfile({
                displayName: props.nameVal ,
                photoURL: 'https://lh4.googleusercontent.com/-XlbJc4pbXew/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfE4ATokRPUHPEPsU0eS4_CEkqmZw/photo.jpg'
            })
            firebase.sendDataToFirestore('user').doc(firebase.getCurrentUid()).set({
                Age: props.ageVal,
                AnnouncementLikes: [],
                Announcements: {},
                Email: firebase.getCurrentUserAllData().email,
                Name: props.nameVal,
                Description: props.descriptionVal,
                PhotoUrl: 'https://lh4.googleusercontent.com/-XlbJc4pbXew/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfE4ATokRPUHPEPsU0eS4_CEkqmZw/photo.jpg',
                Uid: firebase.getCurrentUid(),
                type: 'normal',
                MessagesId: {}
            }).then(() => history.push("/"))
        }
    }

    return (
        <Router>
            <Container>
                <StartButton onClick={appendRegisterData}>Zaczynamy</StartButton>
            </Container>
        </Router>
    )
}

export default Button;