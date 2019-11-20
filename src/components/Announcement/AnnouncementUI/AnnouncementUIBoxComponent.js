import React, { useState } from 'react';
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
    const[executed, setExecuted] = useState(true)
    
    return (
        <FindAnnouncementConsumer>
            {({ selectedAnnouncementData, getAnnouncementByIdRepeatToRefreshPage }) => (
                <Container>
                    {executed ? (
                        getAnnouncementByIdRepeatToRefreshPage(id),
                        setExecuted(false)
                    ) : null}
                     
                    <AnnouncementTopic topic={selectedAnnouncementData[0].Subject}></AnnouncementTopic>
                    <AnnouncementDescription 
                        description={selectedAnnouncementData[0].Description}>
                    </AnnouncementDescription>
                    <AnnouncementSpot spot={selectedAnnouncementData[0].Place}></AnnouncementSpot>
                    <AnnouncementUIButtonsBox></AnnouncementUIButtonsBox>
                    <MakeContactButton></MakeContactButton>
                    <AnnouncementCommentSection></AnnouncementCommentSection>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default AnnouncementUIBoxComponent;