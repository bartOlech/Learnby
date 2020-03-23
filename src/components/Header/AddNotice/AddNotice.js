import React from 'react';
import styled from 'styled-components';
import ico from '../../../assets/img/Mobile/plus.svg';
import { FontStyle } from '../../../assets/style/style';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import firebase from '../../../Firebase.config';
// Notifications
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Container = styled.div`
    width: 152px;
    height: 41px;
    margin-top: 17px;
    margin-right: -100px;
    position: absolute;
    right: 200px;
    top: 0;
    @media (min-width: 1000px) {
        position: absolute;
        right: 350px;
        top: 0;
        margin: ${props => props.margin};
    }
`
const Box = styled.div`
    width: 160px;
    height: 41px;
    background-color: #4DB6AC;
    border-radius: 22px;
    display: flex;
    border: none;
    position: relative;
    outline: none;
    cursor: pointer;
    @media (min-width: 1000px) {
        background-color: ${props => props.background};
    }
`
const Ico = styled.div`
    width: 15px;
    height: 15px;
    /* background-image: url(${ico}); */
    background-image: ${props => props.image};
    background-repeat: no-repeat;
    background-size: 15px 15px;
    position: absolute;
    top: 13px;
    left: 15px;
`
const Text = styled.p`
    font-family: ${FontStyle.family};
    font-size: 1.4em;
    color: black; 
    color: ${props => props.color};
    text-decoration: none;
    position: absolute;
    top: -16px;
    right: 17px;
    font-weight: 600;
`

const AddNotice = (props) => {

    const createNotification = (type) => {
        return () => {
          switch (type) {
            case 'warning':
              NotificationManager.info('Zaloguj się teraz', 'Nie jesteś zalogowany', 3000);
              break;
          }
        };
      };

    return (
        <Container margin={props.margin}>
            {/* Notification */}
            <NotificationContainer/>
            {/* Check does user is logged */}
            {firebase.getCurrentUid() ? (
                <Link to='/createAnnouncement'>
                    <Box background={props.background}>
                        <Ico image={props.image}></Ico>
                        <Text color={props.color}>Ogłoszenie</Text>
                    </Box>
                </Link>
            ) : (
                <Box onClick={createNotification('warning')} background={props.background}>
                    <Ico image={props.image}></Ico>
                    <Text color={props.color}>Ogłoszenie</Text>
                </Box>
            )}
        </Container>
    )
}

export default AddNotice;