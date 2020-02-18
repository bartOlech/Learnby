import React from 'react';
import styled from 'styled-components';
import MessageTextLogoBox from './MessageTextLogoBox/MessageTextLogoBox';
import ListOfUserMessages from './ListOfUserMessages/ListOfUserMessages';

const Container = styled.div`
    width: 25%;
    height: 100%;
    @media(max-width: 1100px) {
        display: none
    }
`

const DesktopLeftLayout = (props) => {
    return (
        <Container>
            <MessageTextLogoBox></MessageTextLogoBox>
            <ListOfUserMessages userId={props.userId}></ListOfUserMessages>
        </Container>
    )
}

// Use only if width > 1100px
export default DesktopLeftLayout;