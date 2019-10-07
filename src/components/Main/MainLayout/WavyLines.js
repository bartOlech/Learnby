import React from 'react';
import styled from 'styled-components';
import WavyLinesIco from '../../../assets/img/Mobile/wavy-lines.svg';

const Container = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
    margin-top: 580px;
    text-align: center;
    background-image: url(${WavyLinesIco});
    background-repeat: no-repeat;
`

const WavyLines = () => {
    return (
        <Container></Container>
    )
}

export default WavyLines;