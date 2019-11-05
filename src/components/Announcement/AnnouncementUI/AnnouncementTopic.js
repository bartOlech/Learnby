import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 10px;
`
const Text = styled.div`
    padding-left: 20px;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.4em;
    font-weight: 600;
    padding-right: 10px;
`
const Topic = styled.h2`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.3em;
    font-weight: 600;
    margin-top: 0;
`

const AnnouncementTopic = (props) => {
    return (
        <Container>
            <Text>Nauka: </Text><Topic>{props.topic}</Topic>
        </Container>
    )
}

export default AnnouncementTopic;