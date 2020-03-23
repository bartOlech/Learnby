import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import Templates from './Template/Templates';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: -300px;
`
const HowItWorksText = styled.h2`
    font-family: ${FontStyle.family};
    font-size: 3.1em;
    color: ${FontStyle.color};
    text-align: left;
    margin-left: 58px;
    font-weight: 500;
    @media (max-width: 1000px) {
        text-align: center;
        margin-left: 0;
    }
`
const HowItWorksExtraText = styled.h4`
    font-family: ${FontStyle.family};
    font-size: 1.6em;
    color: #8CA2C5;
    text-align: left;
    margin-left: 57px;
    font-weight: 400;
    margin-top: -20px;
    @media (max-width: 1000px) {
        text-align: center;
        margin-left: 0;
    }
`

const HowItWorksSection = () => {
    return (
        <Container>
            <HowItWorksText>Jak to działa</HowItWorksText>
            <HowItWorksExtraText>Zacznij w 3 krótkich krokach</HowItWorksExtraText>
            <Templates></Templates>
        </Container>
    )
}

export default HowItWorksSection;