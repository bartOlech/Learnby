import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style'

const Container = styled.div`
    width: 250px;
    height: 100%;
    font-family: ${FontStyle.family};
    font-size: 1.5em;
    color: #8CA2C5;
`

const ExtraTextTemplate = (props) => {
    return (
        <Container>
            {props.ExtraText}
        </Container>
    )
}

export default ExtraTextTemplate;