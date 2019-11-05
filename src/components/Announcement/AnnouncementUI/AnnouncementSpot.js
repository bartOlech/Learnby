import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 20px;
`
const Text = styled.div`
    padding-left: 20px;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.4em;
    font-weight: 600;
    padding-right: 10px;
`
const Spot = styled.div`
    font-family: ${FontStyle.family};
    color: #A0A6B1;
    font-size: 1.3em;
    margin-top: 3px;
`

const AnnouncementTopic = (props) => {
    return (
        <Container>
            <Text>Miejsce: </Text>
            <Spot>{props.spot}</Spot>
        </Container>
    )
}

export default AnnouncementTopic;