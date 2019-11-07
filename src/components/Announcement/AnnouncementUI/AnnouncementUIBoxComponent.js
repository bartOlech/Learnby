import React from 'react';
import styled from 'styled-components';
import AnnouncementTopic from './AnnouncementTopic';
import AnnouncementDescription from './AnnouncementDescription';
import AnnouncementSpot from './AnnouncementSpot';
import AnnouncementUIButtonsBox from './Buttons/AnnouncementUIButtonsBox';
import MakeContactButton from './Buttons/MakeContact/MakeContactButton';
import AnnouncementCommentSection from './AnnouncementFooter/AnnouncementCommentSection'

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const AnnouncementUIBoxComponent = () => {
    return (
        <Container>
            <AnnouncementTopic topic='Język Angielski'></AnnouncementTopic>
            <AnnouncementDescription 
                description='Poszukuję partnera, z którym mógłbym szlifować język angielski.
                Obecnie poziom jakim posługuję się w danym języku jest to B2. 
                Poszukuję osoby, z którą mógłbym spotkać się (lub porozmawiać na Skype) przynajmniej raz w tygodniu około 2h '>
            </AnnouncementDescription>
            <AnnouncementSpot spot='Kraków / zdalnie'></AnnouncementSpot>
            <AnnouncementUIButtonsBox></AnnouncementUIButtonsBox>
            <MakeContactButton></MakeContactButton>
            <AnnouncementCommentSection></AnnouncementCommentSection>
        </Container>
    )
}

export default AnnouncementUIBoxComponent;