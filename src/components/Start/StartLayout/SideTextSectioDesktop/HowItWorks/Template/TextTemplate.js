import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style'

const Container = styled.div`
    width: 100%;
    height: 100%;
    font-family: ${FontStyle.family};
    font-size: 1.5em;
    color: ${FontStyle.color};
`

const TextTemplate = (props) => {
    return (
        <Container> 
            {props.Text}
        </Container>
    )
}

export default TextTemplate;