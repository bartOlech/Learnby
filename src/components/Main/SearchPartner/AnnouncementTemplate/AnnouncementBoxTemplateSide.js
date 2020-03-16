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
    height: 40vh;
    padding: 0;
    padding-left: 20px;
    padding-right: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 17px;
    background-color: #fff;
    box-shadow: 0px 0px 2px 0px rgba(82,82,82,.3);
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
        background-color: #35AC9D;
        border-radius: 5px;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        bottom: -15px;
    }
    @media(max-width: 1300px) {
        display: none;
    }
    @media(min-width: 500px) {
        height: 40vh;
    }
    @media(min-width: 1000px) {
        height: 35vh;
    }
    @media(min-width: 1200px) {
        width: 27vw;
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
`
const Description = styled.p`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.2em;
    margin-top: -8px;
    padding-left: 10px;
`
const SpotSection = styled.div`
    width: 228px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    @media(min-width: 500px) {
        position: absolute;
        right: -60px;
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

const AnnouncementBoxTemplate = (props) => {
    return (
        <Container>
            {/* Desktop */}
            <Media query="(min-width: 500px)" render={() =>
                (
                    <React.Fragment>
                        <UserDataSection>
                            <Photo image={props.UserPhoto}></Photo>
                            <Name>{props.UserName}</Name>
                        </UserDataSection>
                        <ScienceSection>
                            <UserLearnInfoText>Uczy się:</UserLearnInfoText><BranchOfScienece>{props.Subject}</BranchOfScienece>
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