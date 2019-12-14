import React from 'react';
import styled from 'styled-components';
import ReturnButton from './ReturnButton';
import ForwardButton from './ForwardButton';

const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
`

const FooterButtomsBox = () => {
    return (
        <Container>
            <ReturnButton></ReturnButton>
            <ForwardButton></ForwardButton>
        </Container>
    )
}

export default FooterButtomsBox;