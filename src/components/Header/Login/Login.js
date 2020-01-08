import React from 'react';
import styled from 'styled-components';
import LoginIco from '../../../assets/img/Mobile/user.svg';

const Container = styled.div`
    width: 41px;
    height: 41px;
    margin: 17px 20px 0 38px;
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