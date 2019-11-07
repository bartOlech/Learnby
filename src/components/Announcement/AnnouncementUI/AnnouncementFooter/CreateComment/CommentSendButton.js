import React from 'react';
import styled from 'styled-components';
import sendIco from '../../../../../assets/img/Mobile/send.svg';

const Container = styled.div`
    
`
const Button = styled.div`
    width: 50px;
    height: 44px;
    background-color: #4DB6AC;
    border-radius: 9px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Ico = styled.div`
    width: 28px;
    height: 28px;
    background-image: url(${sendIco});
    background-repeat: no-repeat;
    background-size: 28px 28px;
`

const CommentSendButton = () => {
    return (
        <Container>
            <Button><Ico></Ico></Button>
        </Container>
    )
}

export default CommentSendButton;