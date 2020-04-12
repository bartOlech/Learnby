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
    height: 35px;
    border-radius: 5px;
    border: 1px solid #d9dad7;
    margin-top: 30px;
    font-size: 1.2em;
    outline: none;
    background-color: #FCFDFE;
    padding-left: 10px;
    position: relative;
    color: ${FontStyle.color};
    padding-bottom: 3px;
`
const InputPassword = styled.input`
    width: 250px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #d9dad7;
    margin-top: 30px;
    font-size: 1.2em;
    outline: none;
    background-color: #FCFDFE;
    padding-left: 10px;
    position: relative;
    color: ${FontStyle.color};
    padding-bottom: 3px;
`
const InputAlert = styled.p`
    font-family: ${FontStyle.family};
    font-weight: 300;
    font-size: 1.2em;
    color: #d9534f;
    display: ${(props) => props.display};
    /* padding: 0 40px 0 40px; */
    padding-left: 5px;
    margin-top: 8px;
    margin-bottom: -10px;
    text-align: center;
`
const InputText = styled.label`
    position: absolute;
    padding-left: 1px;
    margin-top: 3px;
    color: ${FontStyle.color};
`
const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
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
                <InputBox>
                    <InputText>Email</InputText>
                    <InputEmail data-testid='form-email' value={email} onChange={emailHandle} type='text' ></InputEmail>
                    <InputAlert>{authAlertMsg}</InputAlert>
                </InputBox>
                
                <InputBox style={{marginTop: '15px'}}>
                    <InputText>Hasło</InputText>
                    <InputPassword value={password} onChange={passwordHandle} type='password'></InputPassword>
                    <ForgotPassword></ForgotPassword>
                </InputBox>
                <SendBtn getAuthAlert={getAuthAlert} email={email} password={password}></SendBtn>
            </LogForm>
            <RegisterBtn></RegisterBtn>
        </Container>
    )
}

export default Form;