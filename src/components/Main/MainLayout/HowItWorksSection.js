import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import WavyLines from './WavyLines';
import StepsStructure from './StepsStructure';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
const TittleText = styled.h2`
    font-family: ${FontStyle.family};
    font-size: 1.8em;
    font-weight: 500;
    color: ${FontStyle.color};
    text-align: center;
`

const HowItWorksSection = () => {
    return (
        <Container>
            <TittleText>Jak to działa?</TittleText>
           <StepsStructure></StepsStructure>
            <WavyLines></WavyLines>
        </Container>
    )
}

export default HowItWorksSection;