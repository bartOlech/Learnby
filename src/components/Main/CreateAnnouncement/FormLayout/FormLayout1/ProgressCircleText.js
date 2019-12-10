import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Text = styled.span`
    color: #BABABA;
    font-size: 1.5em;
    font-family: ${FontStyle.family};
    margin-top: 10px;
`

const ProgressCircleText = (props) => {
    return (
        <Container>
            <Text>{props.textOfLevel}</Text>
        </Container>
    )
}

export default ProgressCircleText