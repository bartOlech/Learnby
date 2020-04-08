import React from 'react';
import styled from 'styled-components';
import messageIco from '../../../../assets/img/Mobile/message.svg';
import { FontStyle } from '../../../../assets/style/style';
import { BrowserRouter as Router, Link, useParams } from 'react-router-dom';
// Context
import { FindAnnouncementConsumer } from '../../../../context/CurrentUser.context';

const Container = styled.div`
    
`
const Button = styled.div`
    width: 300px;
    height: 35px;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    margin-top: 11px;
`
const Ico = styled.div`
    width: 28px;
    height: 26px;
    background-image: url(${messageIco});
    background-repeat: no-repeat;
    background-size: 18px 16px;
    margin-left: 8px;
    margin-top: 3px;
`
const Text = styled.span`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.1em;
    margin-left: 0;
`

const Messages = () => {
    return (
        <FindAnnouncementConsumer>
            {({ createUserChatRoom }) => (
                <Container>
                    <Link style={{textDecoration: 'none'}} onClick={() => {
                        createUserChatRoom('mWBuVDnGQCQ8vtT1CbcQRwO1Qyu1')
                    }} to={{pathname: `/chat/mWBuVDnGQCQ8vtT1CbcQRwO1Qyu1`}}> 
                    <Button>
                        <Ico></Ico>
                        <Text>Wiadomości</Text>
                    </Button>
                    </Link>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default Messages;