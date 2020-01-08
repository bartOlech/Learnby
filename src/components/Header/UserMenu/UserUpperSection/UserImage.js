import React from 'react';
import styled from 'styled-components';
import firebase from '../../../../Firebase.config';

const Container = styled.div`

`
const Image = styled.div`
    width: 41px;
    height: 41px;
    border: none;
    border-radius: 50%;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 41px 41px;
    outline: none;
    margin-top: 6px;
    margin-right: 10px;
`

const UserImage = () => {
    return (
        <Container>
            {firebase.getCurrentUserAllData() !== null} {
                <Image image={`${firebase.getCurrentUserAllData().photoURL}?type=normal`}></Image>
            }
        </Container>
    )
}

export default UserImage;