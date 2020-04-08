import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import Name from './Name';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { FindAnnouncementConsumer } from '../../../../../../context/CurrentUser.context'

const Container = styled.div`
    display: flex;
    margin-top: 20px;
    margin-left: 10px;
    background-color: ${props => props.background};
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    cursor: pointer;
`

const User = (props) => {

    const UpdateUserMessages = () => {
        props.UpdateUserMessages()
    }

    return (
        <FindAnnouncementConsumer>
            {({ getUserDataIfRefresh }) => (
                <Link onClick={UpdateUserMessages} style={{ textDecoration: 'none' }} to={{pathname: `/chat/${props.messageId}`}}>
                    <Container background={props.background} >
                        <Image image={props.image}></Image>
                        <Name name={props.name}></Name>
                    </Container>
                </Link>
            )}
        </FindAnnouncementConsumer>
    )
}

export default User;