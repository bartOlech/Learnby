import React from 'react';
import styled from 'styled-components';
import LikeButton from './LikeButton';
import MessageButton from './MessageButton';
import UserPhoto from './UserPhoto';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
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