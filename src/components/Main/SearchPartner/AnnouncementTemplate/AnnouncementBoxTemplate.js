import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import MoreButton from './Buttons/MoreButton';
import ShowWholeAnnouncementBtn from './Buttons/ShowWholeAnnouncementBtn';
import { fadeIn } from 'react-animations';
// media queries
import Media from 'react-media';

// LikeIco animation
const bounceAnimation = keyframes`${fadeIn}`;

const Container = styled.div`
    width: 80vw;
    max-width: 400px;
    height: 320px;
    margin: 0;
    margin-left: 15px;
    padding: 0;
    padding-left: 20px;
    padding-right: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 17px;
    background-color: #fff;
    box-shadow: 2px 2px 3px #D5D9DF;
    position: relative;
    animation: 1s ${bounceAnimation};
    z-index: 1;
    &&::before {
        content: '';
        width: 7px;
        height: 35px;
        background-color: #35AC9D;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        position: absolute;
        left: -7px;
        top: 15px;
        z-index: -1;
    }
    &&::after {
        content: '';
        width: 95px;
        height: 4px;
        background-color: #4DB6AC;
        border-radius: 5px;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        bottom: -15px;
    }
    @media(min-width: 650px) {
        height: 40vh;
        margin-bottom: 50px;
        box-shadow: 0px 0px 2px 0px rgba(82,82,82,.3);
        margin-left: 50px;
        max-width: 750px;
    }
    @media(min-width: 1000px) {
        height: 35vh;
    }
`
// Branch of science section
const ScienceSection = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 8px;
    margin-bottom: 8px;
`
const BranchOfScienece = styled.p`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.4em;
    margin-top: 3px;
    font-weight: 600;
`
// User data section
const UserDataSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 0;
`
const Name = styled.p`
    font-family: ${FontStyle.family};
    color: #76849D;
    font-size: 1.1em;
`
const Photo = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 40px 40px;
    border: none;
    border-radius: 50%;
    margin-top: 9px;
    margin-right: 10px;
`
// Description section
const DescriptionTittle = styled.p`
    font-family: ${FontStyle.family};
    color: #76849D;
    font-size: 1.3em;
    margin-bottom: -10px;
    margin-top: -10px;
    position: relative;
    z-index: 2;
    /* &&:before {
        content: '';
        width: 40px;
        height: 13px;
        background-color: #F7E3A8;
        opacity: .5;
        border-radius: 2px;
        top: 7px;
        position: absolute;
        z-index: -1;
    } */
`
const Description = styled.p`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.2em;
    margin-top: 18px;
    padding-left: 0px;
    @media(min-width: 650px) {
        margin-top: -8px;
        padding-left: 10px;
    }
    @media(max-width: 650px) {
        margin-bottom: -5px;
    }
`
const SpotSection = styled.div`
    width: 228px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    @media(min-width: 650px) {
        position: absolute;
        right: 0;
        top: -7px;
    }
`
const SpotTittle = styled.p`
    font-family: ${FontStyle.family};
    color: #76849D;
    font-size: 1.3em;
    padding-right: 9px;
`
const Spot = styled.p`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.3em;
    margin-top: 21px;
`
const UserLearnInfoText = styled.p`
    font-family: ${FontStyle.family};
    color: #76849D;
    font-size: 1.3em;
    margin-top: 5px;
    padding-right: 10px;
`
const UserLevelText = styled.div`
    font-family: ${FontStyle.family};
    color: #76849D;
    font-size: 1.3em;
`
// Level of knowledge styles
const LevelOfLearning = styled.div`
    display: flex;
    justify-content: space-around;
    position: absolute;
    right: 15px;
    top: 68px;
`
const LevelDotted = styled.div`
    display: flex;
`
const Dot = styled.div`
    margin-left: 5px;
    width: 20px;
    height: 20px;
    border: 2px solid #3AAF9F;
    background-color: ${props => props.background};
    border-radius: 50%;
`
const AnnouncementBoxTemplate = (props) => {
    const knowledgeDots = (val) => {
        let indents = [];
        let emptyDots = 5 - val

        for (let i = 0; i < val; i++) {
            indents.push(<Dot background='#3AAF9F'></Dot>);
        }
        for (let i = 0; i < emptyDots; i++) {
            indents.push(<Dot background='#fff'></Dot>);
        }
        return indents;
    }
    
    return (
        <Container>
        {/* Phone */}
        <Media query="(max-width: 650px)" render={() =>
                (
                    <React.Fragment>
                        <UserDataSection>
                            <Photo image={props.UserPhoto}></Photo>
                            <Name>{props.UserName}</Name>
                        </UserDataSection>
                        <ScienceSection>
                            <UserLearnInfoText>Uczy się:</UserLearnInfoText><BranchOfScienece>{props.Subject}</BranchOfScienece>
                            <MoreButton></MoreButton>
                        </ScienceSection>
                        <DescriptionTittle>Opis:</DescriptionTittle>
                        <Description>{props.Description}</Description>
                        <SpotSection>
                            <SpotTittle>Miejsce:</SpotTittle>
                            <Spot>{props.Place}</Spot>
                        </SpotSection>
                        <ShowWholeAnnouncementBtn id={props.id}></ShowWholeAnnouncementBtn>
                    </React.Fragment>   
                )}
            />
            {/* Desktop */}
            <Media query="(min-width: 650px)" render={() =>
                (
                    <React.Fragment>
                        <UserDataSection>
                            <Photo image={props.UserPhoto}></Photo>
                            <Name>{props.UserName}</Name>
                        </UserDataSection>
                        <ScienceSection>
                            <UserLearnInfoText>Uczy się:</UserLearnInfoText><BranchOfScienece>{props.Subject}</BranchOfScienece>
                            {/* Level of knowledge */}
                            <LevelOfLearning>
                            <UserLevelText>Poziom: </UserLevelText>
                                <LevelDotted>
                                    {/* function that return quantity of green dots */}
                                    {knowledgeDots(props.levelOfKnowledge)}
                                </LevelDotted>
                            </LevelOfLearning>
                            {/* city */}
                            <SpotSection>
                                <SpotTittle>Miejsce:</SpotTittle>
                                <Spot>{props.Place}</Spot>
                            </SpotSection>
                        </ScienceSection>
                        {/* description */}
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <DescriptionTittle>Opis:</DescriptionTittle>
                            <Description>{props.Description}</Description>
                        </div>
                        <ShowWholeAnnouncementBtn id={props.id}></ShowWholeAnnouncementBtn>
                    </React.Fragment>                        
                )}
            />
            
        </Container>
    )
}

export default AnnouncementBoxTemplate;