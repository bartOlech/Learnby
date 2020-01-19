import React from 'react';
import styled from 'styled-components';
import MessageIco from '../../../../../../assets/img/Mobile/chat.svg';
import { BrowserRouter as Router, Link, useParams } from 'react-router-dom';
import { FindAnnouncementConsumer } from '../../../../../../context/CurrentUser.context';

const Container = styled.div`

`
const Box = styled.div`
    width: 57px;
    height: 57px;
    background-color: #E8E7EB;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
`
const Ico = styled.div`
    width: 29px;
    height: 29px;
    background-image: url(${MessageIco});
    background-repeat: no-repeat;
    background-size: 29px 29px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const MessageButton = () => {
    let { id }  = useParams();

    return (
        <FindAnnouncementConsumer>
            {({ createUserChatRoom }) => (
                <Container>
                    <Link to={{pathname: `/chat/${id}`}}>
                        <Box onClick={() => createUserChatRoom(id)}>
                        <Ico></Ico>
                        </Box>
                    </Link>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default MessageButton;