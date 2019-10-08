import React from 'react';
import styled from 'styled-components';
import SignUpComponent from '../../components/Login/SignUp/SignUpComponent';

const Container = styled.div`

`

const SignUpContainer = () => {
    return (
        <Container>
            <SignUpComponent></SignUpComponent>
        </Container>
    )
}

export default SignUpContainer;