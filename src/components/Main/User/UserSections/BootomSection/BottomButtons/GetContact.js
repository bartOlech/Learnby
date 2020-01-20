import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style';
import { BrowserRouter as Router, Link, useParams } from 'react-router-dom';
import { FindAnnouncementConsumer } from '../../../../../../context/CurrentUser.context';

const Button = styled.button`
    width: 275px;
    height: 50px;
    background-color: #4DB6AC;
    color: #fff;
    font-family: ${FontStyle.family};
    font-size: 1.4em;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    outline: none;
`

const GetContact = () => {
    let { id }  = useParams();

    return (
        <FindAnnouncementConsumer>
            {({ createUserChatRoom }) => (
                <Link onClick={createUserChatRoom} to={{pathname: `/chat/${id}`}}><Button>Nawiąż kontakt</Button></Link>
            )}
        </FindAnnouncementConsumer>
    )
}

export default GetContact;