import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style'

const Container = styled.div`
    width: 300px;
    height: 100%;
    font-family: ${FontStyle.family};
    font-size: 1.7em;
    color: ${FontStyle.color};
    @media (max-width: 1000px) {
        margin-top: 100px;
        font-size: 1.7em;
    }
`

const TextTemplate = (props) => {
    return (
        <Container> 
            {props.Text}
        </Container>
    )
}

export default TextTemplate;