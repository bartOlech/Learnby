import React, { useState } from 'react';
import styled from 'styled-components';
import ForgotPassword from './ForgotPassword';
import SendBtn from './SendBtn';
import RegisterBtn from './RegisterBtn';
import { FontStyle } from '../../../assets/style/style';


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
const InputEmail = styled.input`
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
        font-family: ${FontStyle.family};
        font-weight: 300;
        padding-left: 20px;
        padding-top: 10px;
    }
`
const InputPassword = styled.input`
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
        font-family: ${FontStyle.family};
        font-weight: 300;
        padding-left: 20px;
        padding-top: 10px;
    }
`
const InputAlert = styled.p`
    font-family: ${FontStyle.family};
    font-weight: 300;
    font-size: 1.2em;
    color: #d9534f;
    display: ${(props) => props.display};
    padding: 0 40px 0 40px;
    margin-top: 8px;
    margin-bottom: -10px;
    text-align: center;
`

const Form = () => {
    const [email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[authAlertMsg, setAuthAlertMsg] = useState('')

    const emailHandle = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandle = (e) => {
        setPassword(e.target.value)
    }

    const getAuthAlert = (code) => {
        if (code === 'auth/invalid-email') {
            setAuthAlertMsg('podany email jest nieprawidłowy')
        } else if (code === 'auth/wrong-password') {
            setAuthAlertMsg('podane hasło jest błędne')
        } else if (code === 'auth/user-not-found') {
            setAuthAlertMsg('użytkownik nie istnieje')
        }
    }

    return (
        <Container>
            <LogForm>
                <InputEmail data-testid='form-email' value={email} onChange={emailHandle} type='text' placeholder='Email'></InputEmail>
                <InputAlert>{authAlertMsg}</InputAlert>
                <InputPassword value={password} onChange={passwordHandle} type='password' placeholder='Hasło'></InputPassword>
                <ForgotPassword></ForgotPassword>
                <SendBtn getAuthAlert={getAuthAlert} email={email} password={password}></SendBtn>
            </LogForm>
            <RegisterBtn></RegisterBtn>
        </Container>
    )
}

export default Form;