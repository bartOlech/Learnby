import React from 'react';
import styled from 'styled-components';
import AnnouncementTopic from './AnnouncementTopic';
import AnnouncementDescription from './AnnouncementDescription';
import AnnouncementSpot from './AnnouncementSpot';
import AnnouncementUIButtonsBox from './Buttons/AnnouncementUIButtonsBox';
import MakeContactButton from './Buttons/MakeContact/MakeContactButton';
import AnnouncementCommentSection from './AnnouncementFooter/AnnouncementCommentSection';
import { FindAnnouncementConsumer } from '../../../context/CurrentUser.context';
import { BrowserRouter as Router, useParams } from 'react-router-dom'
 
const Container = styled.div`
    width: 100%;
    height: 100%;
`

const AnnouncementUIBoxComponent = () => {
    let { id }  = useParams();
    return (
        <FindAnnouncementConsumer>
            {({ selectedAnnouncementById, getAnnouncementByIdRepeatToRefreshPage }) => (
                <Container>
                     {getAnnouncementByIdRepeatToRefreshPage(id)}
                    <AnnouncementTopic topic={selectedAnnouncementById[0].Subject}></AnnouncementTopic>
                    <AnnouncementDescription 
                        description={selectedAnnouncementById[0].Description}>
                    </AnnouncementDescription>
                    <AnnouncementSpot spot={selectedAnnouncementById[0].Place}></AnnouncementSpot>
                    <AnnouncementUIButtonsBox></AnnouncementUIButtonsBox>
                    <MakeContactButton></MakeContactButton>
                    <AnnouncementCommentSection></AnnouncementCommentSection>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default AnnouncementUIBoxComponent;