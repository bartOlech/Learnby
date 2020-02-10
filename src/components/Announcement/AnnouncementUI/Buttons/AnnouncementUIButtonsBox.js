import React from 'react';
import styled from 'styled-components';
import ShareButton from './ShareButton';
import UserButtons from './UserButtons';

const Container = styled.div`
   display: flex;
   justify-content: space-around;
   margin-top: 30px;
   z-index: 3;
`

const AnnouncementUIButtonsBox = (props) => {
    return (
        <Container>
            <ShareButton></ShareButton>
            <UserButtons selectedAnnouncementData={props.selectedAnnouncementData}></UserButtons>
        </Container>
    )
}

export default AnnouncementUIButtonsBox;