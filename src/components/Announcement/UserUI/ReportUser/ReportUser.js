import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

// Disabled for the phone width. Run in the future

const Container = styled.div`
    width: 200px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    top: 128px;
    right: -25px;
    @media(min-width: 1000px) { 
        right: 0;
        top: 20px;
    }
    @media(max-width: 500px) { 
        display: none;
    }
`
const Text = styled.span`
    font-family: ${FontStyle.family};
    color: #76849D;
    padding-left: 2px;
    font-size: 1.2em;
    @media(min-width: 1000px) { 
        font-size: 1.3em;
    }
`
const Line = styled.div`
    height: 2px;
    width: 76%;
    border-radius: 10px;
    background-color: #76849D;
    cursor: pointer;
    @media(min-width: 1000px) { 
        width: 82%;
    }
`

const ReportUser = () => {
    return (
        <Container>
            <Text>Zgłoś użytkownika<Line></Line></Text>
        </Container>
    )
}

export default ReportUser;