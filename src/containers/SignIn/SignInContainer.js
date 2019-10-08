import React from 'react';
import styled from 'styled-components';
import SignInComponent from '../../components/Login/SignIn/SignInComponent';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const SignInContainer = () => {
    return (
        <Container>
            <SignInComponent></SignInComponent>
        </Container>
    )
}

export default SignInContainer;