import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from "react-router-dom";
import { FontStyle } from '../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
`
const Button = styled.button`
    position: relative;
    width: 263px;
    height: 56px;
    border: none;
    border-radius: 35px;
    background-color: #4DB6AC;
    color: #fff;
    font-size: 25px;
    font-family: ${FontStyle.family};
    font-weight: 600;
    cursor: pointer; 
    outline: none;
    &&:before {
        content: 'Znajdź partnera';
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(25%, 34%);
    };
    @media (min-width: 1000px) {
        margin: -50px 0 0 -15px;
        background-color: #3AB397;
    }
    @media (max-width: 380px) {
        margin-top: -50px;
    }
`

const FindPartnerBtn = () => {
    return (
        <Router>
            <Container>
                <Button data-testid='findPartnerBtn-button'></Button>
            </Container>
        </Router>
    )
}

export default FindPartnerBtn;