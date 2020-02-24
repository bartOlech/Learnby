import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: -12px;
    z-index: 1;
`
const TittleDescription = styled.div`
    padding: 15px 0 15px 20px;
    font-family: ${FontStyle.family};
    color: #76849D;
    font-size: 1.2em;
    position: relative;
    font-weight: 500;
    @media(max-width: 1000px) {
        &&:before {
            content: '';
            width: 42px;
            height: 20px;
            background-color: #EBF8FB;
            position: absolute;
            z-index: -1;
            border-radius: 2px;
        }
    }  
`
const Description = styled.p`
    padding-left: 75px;
    padding-right: 10px;
    font-family: ${FontStyle.family};
    font-size: 1.3em;
    color: ${FontStyle.color};
    font-weight: 400;
    margin-top: -38px;
    @media(min-width: 1000px) {
        margin-top: -14px;
        padding-left: 22px;
    }
`

const AnnouncementTopic = (props) => {
    return (
        <Container>
            <TittleDescription>Opis:</TittleDescription>
            <Description data-testid='announcement-description'>{props.description}</Description>
        </Container>
    )
}

export default AnnouncementTopic;