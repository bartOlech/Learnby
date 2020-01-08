import React from 'react';
import styled from 'styled-components';
import UserImage from './UserImage';
import UserName from './UserName';
import EditProfile from '../Buttons/EditProfile';

const Container = styled.div`
    display: flex;
    margin-top: 5px;
    margin-left: 5px;
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4px;
`

const UserUpperSection = () => {
    return (
        <Container>
            <UserImage></UserImage>
            <Box>
                <UserName></UserName>
                <EditProfile></EditProfile>
            </Box>
        </Container>
    )
}

export default UserUpperSection;