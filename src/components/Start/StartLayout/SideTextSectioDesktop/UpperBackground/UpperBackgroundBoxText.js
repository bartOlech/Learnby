import React from 'react';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    width: 450px;
    height: 100%;
`
const Text = styled.p`
    width: 450px;
    font-family: ${FontStyle.family};
    font-size: 2.3em;
    color: #fff;
    position: absolute;
    top: 65px;
    right: 700px;
    text-align: center;
    font-weight: 600;
    @media (max-width: 1173px) {
        right: 580px;
    }
    @media (max-width: 1030px) {
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top: 20px;
    }
    @media (max-width: 535px) {
        font-size: 1.5em;
        width: 340px;
    }
`

const UpperBackgroundBoxText = () => {
    return (
        <Container>
            <Text>Dzięki Learnby twoja nauka może być czymś więcej</Text>
        </Container>
    )
}

export default UpperBackgroundBoxText;