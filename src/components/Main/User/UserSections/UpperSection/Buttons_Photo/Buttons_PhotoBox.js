import React from 'react';
import styled from 'styled-components';
import LikeButton from './HighFiveIco';
import MessageButton from './MessageButton';
import UserPhoto from './UserPhoto';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -20px;
`

const Buttons_PhotoBox = (props) => {
    return (
        <Container>
            <MessageButton></MessageButton>
            <UserPhoto photo={props.photo}></UserPhoto>
            <LikeButton></LikeButton>
        </Container>
    )
}

export default Buttons_PhotoBox;