import React from 'react';
import styled from 'styled-components';
import UserImage from './UserImage';
import UserData from './UserData';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: -50px;
    margin-bottom: -100px;
`

const UserUIBoxComponent = () => {
    return (
        <Container>
            <UserImage></UserImage>
            <UserData></UserData>
        </Container>
    )
}

export default UserUIBoxComponent;