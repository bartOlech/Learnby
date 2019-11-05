import React from 'react';
import styled from 'styled-components';
import ShareButton from './ShareButton';
import UserButtons from './UserButtons';

const Container = styled.div`
   display: flex;
   justify-content: space-around;
   margin-top: 30px;
`

const AnnouncementUIButtonsBox = () => {
    return (
        <Container>
            <ShareButton></ShareButton>
            <UserButtons></UserButtons>
        </Container>
    )
}

export default AnnouncementUIButtonsBox;