import React from 'react';
import styled from 'styled-components';
import LikeButton from './LikeButton';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3px;
`

const UserButtons = (props) => {
    return (
        <Container>
            <LikeButton></LikeButton>
        </Container>
    )
}

export default UserButtons;