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
// media queries
import Media from 'react-media';
// desktop components
import AnnouncementAge from './AnnouncementAge';
import LevelOfLearn from '../UserUI/LevelOfLearn';
 
const Container = styled.div`
    width: 100%;
    height: 100%;
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgba(190, 190, 190, .75);
`
const LeftContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: -7px;
`
const RightContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const MainContentBox = styled.div`
    width: 100%;
    height: 325px;
    display: flex;
    position: relative;
    margin-top: 35px;
    @media(max-width: 1171px) {
        height: 400px;
    }
`

const AnnouncementUIBoxComponent = () => {
    let { id }  = useParams();
    const[executed, setExecuted] = useState(true)
    
    return (
        <FindAnnouncementConsumer>
            {({ selectedAnnouncementData, getAnnouncementByIdRepeatToRefreshPage }) => (
                <div>
                    {/* Phone */}
                    <Media query="(max-width: 1000px)" render={() =>
                        (
                            <Container>
                                {executed ? (
                                    getAnnouncementByIdRepeatToRefreshPage(id),
                                    setExecuted(false)
                                ) : null}
                                <AnnouncementTopic topic={selectedAnnouncementData[0].Subject}></AnnouncementTopic>
                                <LevelOfLearn level={selectedAnnouncementData[0].LevelOfKnowledge}></LevelOfLearn>
                                <AnnouncementDescription 
                                    description={selectedAnnouncementData[0].Description}>
                                </AnnouncementDescription>
                                <AnnouncementSpot 
                                    remote={selectedAnnouncementData[0].Remote} 
                                    spot={selectedAnnouncementData[0].Place}></AnnouncementSpot>
                                <AnnouncementUIButtonsBox selectedAnnouncementData={selectedAnnouncementData}></AnnouncementUIButtonsBox>
                                <MakeContactButton 
                                    selectedAnnouncementData={selectedAnnouncementData}                       
                                ></MakeContactButton>
                                <AnnouncementCommentSection></AnnouncementCommentSection>
                            </Container>
                        )}
                    />
                    {/* Desktop */}
                    <Media query="(min-width: 1000px)" render={() =>
                        (
                            <Container>
                                {executed ? (
                                    getAnnouncementByIdRepeatToRefreshPage(id),
                                    setExecuted(false)
                                ) : null}
                                <HorizontalLine></HorizontalLine>
                                <MainContentBox>
                                    <LeftContent>
                                        <AnnouncementTopic topic={selectedAnnouncementData[0].Subject}></AnnouncementTopic>
                                        <AnnouncementAge age={selectedAnnouncementData[0].AnnouncementCreator.Age}></AnnouncementAge>
                                        <AnnouncementSpot 
                                            remote={selectedAnnouncementData[0].Remote} 
                                            spot={selectedAnnouncementData[0].Place}>
                                        </AnnouncementSpot>
                                        <LevelOfLearn level={selectedAnnouncementData[0].LevelOfKnowledge}></LevelOfLearn>
                                        <AnnouncementUIButtonsBox selectedAnnouncementData={selectedAnnouncementData}></AnnouncementUIButtonsBox>
                                        <MakeContactButton 
                                            selectedAnnouncementData={selectedAnnouncementData}                       
                                        ></MakeContactButton>
                                    </LeftContent>
                                    <RightContent>
                                        <AnnouncementDescription 
                                            description={selectedAnnouncementData[0].Description}>
                                        </AnnouncementDescription>
                                    </RightContent>
                                </MainContentBox>
                                {/* <HorizontalLine></HorizontalLine> */}
                                <AnnouncementCommentSection></AnnouncementCommentSection>
                            </Container>                     
                        )}
                    />
                </div>
            )}
        </FindAnnouncementConsumer>
    )
}

export default AnnouncementUIBoxComponent;