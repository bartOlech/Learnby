import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FindAnnouncementConsumer } from '../../../../../context/CurrentUser.context';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 45px;
`
const Button = styled.button`
    width: 275px;
    height: 50px;
    border-radius: 25px;
    background-color: #4DB6AC;  
    border: none;
    font-family: ${FontStyle.family};
    text-align: center;
    font-weight: 600;
    color: #fff;
    font-size: 1.4em;
    cursor: pointer;
    outline: none;
`

const MakeContactButton = (props) => {
    return (
        <FindAnnouncementConsumer>
            {({ createUserChatRoom, selectedAnnouncementData }) => (
                <Container>
                    <Link onClick={() => {
                        createUserChatRoom(selectedAnnouncementData[0].AnnouncementCreator.UserId)
                    }} to={{pathname: `/chat/${props.selectedAnnouncementData[0].AnnouncementCreator.UserId}`}}><Button>Nawiąż kontakt</Button></Link>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default MakeContactButton;