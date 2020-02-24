import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style';

const Container = styled.span`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.5em;
    margin-top: 10px;
    margin-left: 15px;
    text-decoration: none;
`

const Name = (props) => {
    return (
        <Container>
            {props.name.replace(/ .*/,'')}
        </Container>
    )
}

export default Name;