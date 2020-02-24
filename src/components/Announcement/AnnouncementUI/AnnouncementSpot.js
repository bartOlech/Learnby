import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 400px;
    height: 50px;
    display: flex;
    margin-top: 20px;
    @media(min-width: 1000px) {
        position: absolute;
        left: 0;
        top: 88px;
    }
`
const Text = styled.div`
    padding-left: 20px;
    font-family: ${FontStyle.family};
    color: #76849D;
    font-size: 1.3em;
    font-weight: 500;
    padding-right: 10px;
`
const Spot = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.3em;
`

const AnnouncementTopic = (props) => {
    return (
        <Container>
            <Text>Miejsce: </Text>
            <Spot>{props.remote ? 'Zdalnie' : `${props.spot} / Zdalnie` }</Spot>
        </Container>
    )
}

export default AnnouncementTopic;