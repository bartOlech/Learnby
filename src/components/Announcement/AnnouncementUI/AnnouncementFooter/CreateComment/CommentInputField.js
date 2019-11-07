import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    
`
const Input = styled.input`
    width: 250px;
    height: 45px;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 2px #A0A6B1;
    outline:  none;
    padding-left: 10px;
    font-family: ${FontStyle.family};
   
    font-size: 1.4em;
    font-weight: 300;
    &&::placeholder {
        color: #A0A6B1;
    }
`

const ConmnentInputField = () => {
    return (
        <Container>
            <Input type='text' placeholder='Napisz komentarz'></Input>
        </Container>
    )
}

export default ConmnentInputField;