import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import { BrowseRouter as Router, Link } from 'react-router-dom';  

const Container = styled.div`

`
const Button = styled.button`
    width: 300px;
    height: 60px;
    border: 1px solid #fff;
    border-radius: 42px;
    background-color: #3AAF9F;
    font-family: ${FontStyle.family};
    color: #fff;
    font-size: 1.8em;
    cursor: pointer;
    outline: none;
    margin-top: 6px;
`


const SwitchLoginButton = () => {
    return (
        <Container>
            <Link style={{textDecoration: 'none'}} to='/register/'>
                <Button>Załóż konto</Button>
            </Link>
        </Container>
    )
}

export default SwitchLoginButton;