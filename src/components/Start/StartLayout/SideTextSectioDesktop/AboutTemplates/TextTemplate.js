import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    width: 500px;
    height: 100%;
    margin-top: 80px;
    margin-left: -40px;
    z-index: 2;
    @media (max-width: 1035px) {
        text-align: center;
        margin: 0;
        margin-top: -60px;
        margin-bottom: 30px;
    }
    @media (max-width: 550px) {
        width: 400px;
        
    }
    @media (max-width: 410px) {
        width: 300px;
        
    }
`
const MainText = styled.h2`
    font-family: ${FontStyle.family};
    font-size: 2em;
    color: ${FontStyle.color};
    font-weight: 600;
`
const ExtraText = styled.h4`
    font-family: ${FontStyle.family};
    font-size: 1.3em;
    color: #93969D;
    font-weight: 200;
    margin-top: -10px;
`

const TextTemplate = (props) => {
    return (
        <Container>
            <MainText data-testid='main-text'>{props.MainText}</MainText>
            <ExtraText data-testid='extra-text'>{props.ExtraText}</ExtraText>
        </Container>
    )
}

export default TextTemplate;