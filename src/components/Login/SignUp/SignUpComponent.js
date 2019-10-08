import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { FontStyle } from '../../../assets/style/style';
import GoogleBtn from './Social/Google';
import FacebookBtn from './Social/Facebook';
import Form from './Form';

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const MainText = styled.h2`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    text-align: center;
    font-size: 2em;
    margin-top: -10px;
    font-weight: 600;
`
const SocialIco = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
`

const SignInComponent = () => {
    return (
        <Container> 
            <Header></Header>
            <MainText>Zarejestruj się</MainText>
            <SocialIco>
                <FacebookBtn></FacebookBtn>
                <GoogleBtn></GoogleBtn>
            </SocialIco>
            <Form></Form>
        </Container>
    )
}

export default SignInComponent;