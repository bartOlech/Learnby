import React from 'react';
import styled from 'styled-components';
import ico from '../../../../../../assets/img/Mobile/high-five.svg';

const Container = styled.div`

`
const Box = styled.div`
    width: 57px;
    height: 57px;
    background-color: #E8E7EB;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
`
const Ico = styled.div`
    width: 29px;
    height: 29px;
    background-image: url(${ico});
    background-repeat: no-repeat;
    background-size: 29px 29px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const LikeButton = () => {
    const sendContactMessage = () => {
        console.log('to high-five')
    }

    return (
        <Container>
            <Box onClick={sendContactMessage}>
                <Ico></Ico>
            </Box>
        </Container>
    )
}

export default LikeButton;