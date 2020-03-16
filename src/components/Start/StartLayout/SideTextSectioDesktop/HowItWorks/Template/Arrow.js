import React from 'react';
import styled from 'styled-components';
import ArrowIco from '../../../../../../assets/img/Desktop/steps-arrow.svg';

const Container = styled.div`
    width: 50px;
    height: 50px;
    @media (max-width: 1000px) {
        display: none;
    }
`
const ArrowImage = styled.div`
    width: 50px; 
    height: 50px;
    background-image: url(${ArrowIco});
    background-size: 50px 50px;
    background-repeat: no-repeat;
    margin-top: 170px;
    transform: rotate(90deg);
`

const Arrow = () => {
    return (
        <Container>
            <ArrowImage data-testid='arrow-image'></ArrowImage>
        </Container>
    )
}

export default Arrow;