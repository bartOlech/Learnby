import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 45px;
`
const Button = styled.div`
    width: 275px;
    height: 50px;
    border-radius: 25px;
    background-color: #4DB6AC;  
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1.4em;
    font-weight: 600;
    margin-top: -5px;
    color: #fff;
`

const MakeContactButton = () => {
    return (
        <Container>
            <Button><Text>Nawiąż kontakt</Text></Button>
        </Container>
    )
}

export default MakeContactButton;