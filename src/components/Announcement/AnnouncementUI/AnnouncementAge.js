import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 100px;
    height: 50px;
    display: flex;
    margin-top: 10px;
    @media(min-width: 1000px) {
        position: absolute;
        left: 0;
        top: 47px;
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
const Topic = styled.h2`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.3em;
    font-weight: 500;
    margin-top: -1px;
`

const AnnouncementTopic = (props) => {
    return (
        <Container>
            <Text>Wiek: </Text><Topic>{props.age}</Topic>
        </Container>
    )
}

export default AnnouncementTopic;