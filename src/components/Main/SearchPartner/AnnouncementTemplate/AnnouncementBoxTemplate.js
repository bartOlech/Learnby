import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import MoreButton from './Buttons/MoreButton';
import ShowWholeAnnouncementBtn from './Buttons/ShowWholeAnnouncementBtn';
import ExamplePhoto from '../../../../assets/img/Mobile/user.svg';

const Container = styled.div`
    width: 80vw;
    max-width: 400px;
    height: 320px;
    margin: 0;
    margin-left: 15px;
    padding: 0;
    padding-left: 20px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 17px;
    background-color: #fff;
    box-shadow: 2px 2px 3px #D5D9DF;
    position: relative;
    &&::before {
        content: '';
        width: 10px;
        height: 35px;
        background-color: #F2D274;
        border-radius: 3px;
        position: absolute;
        left: -6px;
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
`
// Branch of science section
const BranchSection = styled.div`
    display: flex;
    justify-content: space-around;
`
const BranchOfScienece = styled.h1`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.3em;
    margin-top: 5px;
`
// User data section
const UserDataSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: -10px;
`
const Name = styled.p`
    font-family: ${FontStyle.family};
    color: grey;
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
    margin-left: 10px;
`
// Description section
const DescriptionTittle = styled.h2`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.2em;
    margin-bottom: -10px;
    margin-top: 10px;
    position: relative;
    z-index: 2;
    &&:before {
        content: '';
        width: 40px;
        height: 13px;
        background-color: #F7E3A8;
        opacity: .5;
        border-radius: 2px;
        top: 7px;
        position: absolute;
        z-index: -1;
    }
`
const Description = styled.p`
    font-family: ${FontStyle.family};
    color: grey;
    font-size: 1.1em;
    margin-bottom: -3px;
`
const SpotSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
const SpotTittle = styled.h2`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.2em;
    padding-right: 9px;
`
const Spot = styled.p`
    font-family: ${FontStyle.family};
    color: grey;
    font-size: 1.1em;
`

const AnnouncementBoxTemplate = () => {
    return (
        <Container>
            <BranchSection>
                <BranchOfScienece>Jezyk Angielski</BranchOfScienece>
                <MoreButton></MoreButton>
            </BranchSection>
            <UserDataSection>
                <Name>Justyna</Name>
                <Photo image={ExamplePhoto}></Photo>
            </UserDataSection>
            <DescriptionTittle>Opis:</DescriptionTittle>
            <Description>Poszukuję partnera, z którym mógłbym szlifować język angielski  którym mógłbym szlifować język angielski</Description>
            <SpotSection>
                <SpotTittle>Miejsce:</SpotTittle>
                <Spot>Kraków / Zdalnie</Spot>
            </SpotSection>
            <ShowWholeAnnouncementBtn></ShowWholeAnnouncementBtn>
        </Container>
    )
}

export default AnnouncementBoxTemplate;