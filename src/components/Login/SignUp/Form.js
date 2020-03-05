import React, { useState } from 'react';
import styled from 'styled-components';
import SendBtn from './SendBtn';
import LoginBtn from './LoginBtn';
import { FontStyle } from '../../../assets/style/style';
import { EmailValidation, PasswordValidation } from '../Validation/index';

import useStateWithCallback from 'use-state-with-callback';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
`
const LogForm = styled.form`
    width: 100%;
    height: 450px;
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
    border-bottom: ${props => props.border};
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
    border-bottom: ${props => props.border};
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
    display: ${props => props.display};
    padding: 0 40px 0 40px;
    margin-top: 8px;
    margin-bottom: -10px;
    text-align: center;
`

//send this code to the containers!!!
const Form = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[password2, setPassword2] = useState('')
    const[emailErrorMessage, setEmailErrorMessage] = useState('')

    // useState with callback
    // validation
    const[emailValidation, setEmailValidation] = useStateWithCallback(true, () => {
        if(email.length > 0) {
            setEmailValidation(EmailValidation(email))
        }
    });
    const[passwordValidation, setPasswordValidation] = useStateWithCallback(true, () => {
        if(password.length > 0) {
            setPasswordValidation(PasswordValidation(password, password2))
        }
    });

    // callback function from the children
    const validationCallback = () => {
        setEmailValidation(EmailValidation(email));
        setPasswordValidation(PasswordValidation(password, password2))
        
    }

    const emailHandle = (e) => {
        setEmail(e.target.value)
        setEmailErrorMessage('')
    }
    const passwordHandle = (e) => {
        setPassword(e.target.value)
    }
    const password2Handle = (e) => {
        setPassword2(e.target.value)
    }

    // callback error message
    const getAuthAlert = (code) => {
        if(code === "auth/invalid-email") {
            setEmailErrorMessage('Email jest nieprawidłowy')
        } else {
            setEmailErrorMessage('Ops, coś poszło nie tak')
        }
        
        // ADD THE ANOTHER ERRORS!!! use if(code === ....)
    }
    
    return (
        <Container>
            <LogForm>
                <InputEmail 
                    border={emailValidation ? 'none' : 'solid 2px #d9534f'} 
                    value={email} 
                    onChange={emailHandle} 
                    type='text' 
                    placeholder='Email'>
                </InputEmail>
                <InputAlert 
                    display={!emailValidation || emailErrorMessage ? 'inline' : 'none'}>
                    {emailErrorMessage ? emailErrorMessage : 'Podany email jest nieprawidłowy'}
                 </InputAlert>
                <InputPassword 
                    border={passwordValidation ? 'none' : 'solid 2px #d9534f'} 
                    value={password} 
                    onChange={passwordHandle} 
                    type='password' 
                    placeholder='Hasło'>
                </InputPassword>
                <InputPassword 
                    border={passwordValidation ? 'none' : 'solid 2px #d9534f'} 
                    value={password2} 
                    style={{marginBottom: '30px'}} 
                    onChange={password2Handle} 
                    type='password' 
                    placeholder='Powtórz hasło'>
                </InputPassword>
                <InputAlert 
                    style={{marginTop: '-22px'}}
                    display={passwordValidation ? 'none' : 'inline'}
                >Hasła muszą być takie same i posiadać min. 6 znaków</InputAlert>
                <SendBtn 
                    validationCallback={validationCallback} 
                    getAuthAlert={getAuthAlert}
                    email={email} 
                    password={password} 
                    password2={password2}
                    emailValidation={emailValidation}
                    passwordValidation={passwordValidation}
                    >
                </SendBtn>
            </LogForm>
            <LoginBtn></LoginBtn>
        </Container>
    )
}

export default Form;