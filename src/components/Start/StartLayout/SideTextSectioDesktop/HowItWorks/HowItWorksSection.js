import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import Templates from './Template/Templates';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: -350px;
`
const HowItWorksText = styled.h2`
    font-family: ${FontStyle.family};
    font-size: 2.8em;
    color: ${FontStyle.color};
    text-align: left;
    margin-left: 58px;
    font-weight: 500;
`
const HowItWorksExtraText = styled.h4`
    font-family: ${FontStyle.family};
    font-size: 1.4em;
    color: #8CA2C5;
    text-align: left;
    margin-left: 57px;
    font-weight: 400;
    margin-top: -20px;
`

const HowItWorksSection = () => {
    return (
        <Container>
            <HowItWorksText>Jak to działa</HowItWorksText>
            <HowItWorksExtraText>Zacznij w 4 krótkich krokach</HowItWorksExtraText>
            <Templates></Templates>
        </Container>
    )
}

export default HowItWorksSection;