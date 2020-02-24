import React from 'react';
import styled from 'styled-components';
import LetterLogo from './LetterLogo';
import MessageText from './MessageText';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

const MessageTextLogoBox = () => {
    return (
        <Container>
            <LetterLogo></LetterLogo>
            <MessageText></MessageText>
        </Container>
    )
}

export default MessageTextLogoBox;