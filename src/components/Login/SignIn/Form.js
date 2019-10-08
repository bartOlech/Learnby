import React from 'react';
import styled from 'styled-components';
import ForgotPassword from './ForgotPassword';
import SendBtn from './SendBtn';
import RegisterBtn from './RegisterBtn';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
`
const LogForm = styled.form`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Input = styled.input`
    width: 250px;
    height: 40px;
    border-radius: 10px;
    margin-top: 30px;
    font-size: 1.6em;
    outline: none;
    border: none;
    box-shadow: 1px 1px 6px #B4B4B4;
    &&::placeholder {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 300;
        padding-left: 20px;
        padding-top: 10px;
    }
`

const Form = () => {
    return (
        <Container>
            <LogForm>
                <Input type='text' placeholder='Email'></Input>
                <Input type='password' placeholder='Hasło'></Input>
                <ForgotPassword></ForgotPassword>
                <SendBtn></SendBtn>
            </LogForm>
            <RegisterBtn></RegisterBtn>
        </Container>
    )
}

export default Form;