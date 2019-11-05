import React from 'react';
import styled from 'styled-components';
import messageIco from '../../../../assets/img/Mobile/message.svg';

const Container = styled.div`
   
`
const Button = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${messageIco});
    background-repeat: no-repeat;
    background-size: 30px 30px;
    cursor: pointer;
    margin-right: 10px
`

const MessageButton = () => {
    return (
        <Container>
            <Button></Button>
        </Container>
    )
}

export default MessageButton;