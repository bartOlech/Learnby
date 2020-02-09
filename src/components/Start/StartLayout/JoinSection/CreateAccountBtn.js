import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// style
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
`
const Button = styled.button`
    width: 270px;
    height: 55px;
    font-family: ${FontStyle.family};
    color: #fff;
    background-color: #3AAF9F;
    border: none;
    border-radius: 35px;
    font-size: 1.8em;
    outline: none;
    cursor: pointer;
`

const CreateAccountBtn = () => {
    return (
        <Container>
            <Link to='/login'><Button>Załóż konto</Button></Link>
        </Container>
    )
}

export default CreateAccountBtn;