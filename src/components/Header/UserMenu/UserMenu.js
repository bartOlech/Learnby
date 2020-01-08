import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { fadeIn } from 'react-animations';
import UserUpperSection from './UserUpperSection/UserUpperSection';
import Messages from './Buttons/Messages';
import Notification from './Buttons/Notifications';
import LogOut from './Buttons/LogOut';

// animation
const bounceAnimation = keyframes`${fadeIn}`;

const Container = styled.div`
    width: 300px;
    height: 183px;
    border-radius: 3px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    position: absolute;
    right: 0;
    top: 70px;
    background-color: #fff;
    animation: ${props => props.animation};
    &&:before {
        content: '';
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 20px solid #fff;
        position: absolute;
        top: -10px;
        right: 30px;
    }
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #D6D6D6;
    margin-top: 7px;
    margin-bottom: 7px;
`

const UserMenu = (props) => {
    return (
        <Container animation={!props.isHideImage ? css`.4s ${bounceAnimation}` : 'none'} >
            <UserUpperSection></UserUpperSection>
            <HorizontalLine></HorizontalLine>
            <Messages></Messages>
            <Notification></Notification>
            <HorizontalLine></HorizontalLine>
            <LogOut></LogOut>
        </Container>
    )
}

export default UserMenu;