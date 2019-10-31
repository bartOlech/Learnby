import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import HappyPeopleIco from '../../../assets/img/Mobile/happyPeople.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Text = styled.p`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.9em;
    font-weight: 600;
    text-align: center;
`
const Ico = styled.div`
    width: 300px;
    height: 300px;
    background-image: url(${HappyPeopleIco});
    background-size: 300px 300px;
    background-repeat: no-repeat;
`

const MainContent = (props) => {
    return (
        <Container>
            <Text style={{marginBottom: '-45px'}}>{props.upperText}</Text>
            <Ico></Ico>
            <Text style={{marginTop: '-45px', marginBottom: '-3px'}}>{props.bottomText}</Text>
        </Container>
    )
}

export default MainContent;