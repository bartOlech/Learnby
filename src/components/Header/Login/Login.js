import React from 'react';
import styled from 'styled-components';
import LoginIco from '../../../assets/img/Mobile/profile.svg';

const Container = styled.div`
    width: 40px;
    height: 40px;
    margin-top: 20px;
    margin-right: 10px;
    padding: 0;
    background-image: url(${LoginIco});
    background-size: cover;
    background-repeat: no-repeat;
`

const Login = () => {
    return (
        <Container>
    
        </Container>
    )
}

export default Login;