import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import firebase from '../../../Firebase.config';

const Container = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`
const Button = styled.button`
    width: 260px;
    height: 56px;
    background-color: #4DB6AC;
    border: none;
    border-radius: 28px;
    color: #fff;
    font-family: ${FontStyle.family};
    font-size: 1.6em;
    cursor: pointer;
    outline: none;
`

const SendBtn = (props) => {

    //move this scrap of code to the containers!!!
    const handleButton = (e) => {
        e.preventDefault()
        firebase.register(props.name, props.email, props.password)
    }

    return (
        <Container>
            <Button onClick={handleButton}>Zarejestruj się</Button>
        </Container>
    )
}

export default SendBtn;