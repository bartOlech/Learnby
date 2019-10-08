import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { BrowseRouter as Router, Link } from 'react-router-dom';  

const Container = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    cursor: pointer;
`
const Text = styled.p`
    font-family: ${FontStyle.family};
    color: ${props => props.color};
    font-size: 1.2em;
`

const handleButton = () => {
    console.log('Register')
}

const RegisterBtn = () => {
    return (
        <Container>
            <Text color='#000000'>Nie posiadasz konta?</Text>
            <Link style={{textDecoration: 'none'}} to='/register/'>
                <Text onClick={handleButton} style={{marginLeft: '10px', fontWeight: '600'}} color='#39B1C1'>Zarejestruj się</Text>
            </Link>
        </Container>
    )
}

export default RegisterBtn;