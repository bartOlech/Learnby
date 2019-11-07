import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`

`
const Text = styled.p`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.3em;
    font-weight: 400;
    margin-left: 16px;
    margin-bottom: 5px;
`

const TopicText = (props) => {
    return (
        <Container>
            <Text>Liczba kometarzy: {props.amountOfComments}</Text>
        </Container>
    )
}

export default TopicText;