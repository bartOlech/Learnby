import React from 'react';
import styled from 'styled-components';
import UserImage from './UserImage';
import UserData from './UserData';

// temporary
import userImage from '../../../assets/img/Mobile/user.svg';

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
            <UserImage
                userImage={userImage}
            ></UserImage>
            <UserData
                name='Mateusz'
                age='21'
            ></UserData>
        </Container>
    )
}

export default UserUIBoxComponent;