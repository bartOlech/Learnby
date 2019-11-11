import React from 'react';
import styled from 'styled-components';
import likeIco from '../../../../assets/img/Mobile/like.svg';

const Container = styled.div`
   
`
const Button = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${likeIco});
    background-repeat: no-repeat;
    background-size: 30px 30px;
    cursor: pointer;
    margin-left: 10px;
`

const LikeButton = () => {
    return (
        <Container>
            <Button></Button>
        </Container>
    )
}

export default LikeButton;