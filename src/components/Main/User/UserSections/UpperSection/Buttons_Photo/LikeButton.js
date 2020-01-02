import React from 'react';
import styled from 'styled-components';
import StarIco from '../../../../../../assets/img/Mobile/star.svg';

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
    background-image: url(${StarIco});
    background-repeat: no-repeat;
    background-size: 29px 29px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const LikeButton = () => {
    return (
        <Container>
            <Box>
                <Ico></Ico>
            </Box>
        </Container>
    )
}

export default LikeButton;