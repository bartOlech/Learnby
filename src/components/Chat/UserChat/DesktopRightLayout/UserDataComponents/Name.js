import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style'

const Container = styled.div`
    width: 100%;
    min-height: 50px;
    text-align: center;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.8em;
    margin-top: 35px;
`

const Name = (props) => {
    return (
        <Container>
            {props.name}
        </Container>
    )
}

export default Name;