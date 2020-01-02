import React from 'react';
import styled from 'styled-components';
import GetContact from './GetContact';
import SearchPartner from './SearchPartner';
import { FontStyle } from '../../../../../../assets/style/style';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`
const BoxLine = styled.div`
    display: flex;
    justify-content: center;
`
const Line = styled.div`
    width: 96px;
    height: 2px;
    background-color: #A0A6B1;
    border-radius: 15px;
    margin: 32px 10px 20px 10px;
`
const TextLine = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1.3em;
    color: #A0A6B1;
    padding: 20px 10px 20px 10px;
`

const BottomButtons = () => {
    return (
        <Container>
            <GetContact></GetContact>
            <BoxLine>
                <Line></Line>
                <TextLine>Albo</TextLine>
                <Line></Line>
            </BoxLine>
            <SearchPartner></SearchPartner>
        </Container>
    )
}

export default BottomButtons;