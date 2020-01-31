import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    width: 500px;
    height: 100%;
    margin-top: 80px;
    margin-left: -40px;
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
            <MainText>{props.MainText}</MainText>
            <ExtraText>{props.ExtraText}</ExtraText>
        </Container>
    )
}

export default TextTemplate;