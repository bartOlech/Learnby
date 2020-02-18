import React from 'react';
import styled from 'styled-components';
import MessageTextLogoBox from './MessageTextLogoBox/MessageTextLogoBox';

const Container = styled.div`
    width: 25%;
    height: 100%;
    @media(max-width: 1100px) {
        display: none
    }
`

const DesktopLeftLayout = () => {
    return (
        <Container>
            <MessageTextLogoBox></MessageTextLogoBox>
        </Container>
    )
}

// Use only if width > 1100px
export default DesktopLeftLayout;