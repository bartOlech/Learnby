import React, { useState } from 'react';
import styled from 'styled-components';
import SendBtn from './SendBtn';
import LoginBtn from './LoginBtn';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
`
const LogForm = styled.form`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Input = styled.input`
    width: 250px;
    height: 40px;
    border-radius: 10px;
    margin-top: 30px;
    font-size: 1.3em;
    outline: none;
    border: none;
    box-shadow: 1px 1px 6px #B4B4B4;
    padding-left: 10px;
    &&::placeholder {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 300;
        padding-left: 20px;
        padding-top: 10px;
    }
`

//send this code to the containers!!!
const Form = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const emailHandle = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandle = (e) => {
        setPassword(e.target.value)
    }

    return (
        <Container>
            <LogForm>
                <Input value={email} onChange={emailHandle} type='text' placeholder='Email'></Input>
                <Input value={password} onChange={passwordHandle} type='password' placeholder='Hasło'></Input>
                <Input style={{marginBottom: '30px'}} type='password' placeholder='Powtórz hasło'></Input>
                <SendBtn email={email} password={password} name='Wercia'></SendBtn>
            </LogForm>
            <LoginBtn></LoginBtn>
        </Container>
    )
}

export default Form;