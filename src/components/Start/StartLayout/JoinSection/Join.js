import React from 'react';
import styled from 'styled-components';
import CreateAccountBtn from './CreateAccountBtn';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: -200px;
`
const TittleText = styled.h2`
    font-family: ${FontStyle.family};
    font-size: 1.8em;
    font-weight: 500;
    color: ${FontStyle.color};
    text-align: center;
    @media (min-width: 1000px) {
        font-size: 2.2em;
        margin-bottom: 0px;
    }
`

const Join = () => {
    return ( 
        <Container>
            <TittleText>Uczmy się razem!</TittleText>
            <CreateAccountBtn></CreateAccountBtn>
        </Container> 
    )
}

export default Join;