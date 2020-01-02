import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: -12px;
`
const TittleDescription = styled.div`
    padding: 15px 0 15px 20px;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.2em;
    position: relative;
    font-weight: 600;
    &&:before {
        content: '';
        width: 42px;
        height: 20px;
        background-color: #EBF8FB;
        position: absolute;
        z-index: -1;
        border-radius: 2px;
    }
`
const Description = styled.p`
    padding-left: 20px;
    padding-right: 5px;
    font-family: ${FontStyle.family};
    font-size: 1.4em;
    color: ${FontStyle.color};
    font-weight: 300;
    margin-top: -13px;
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