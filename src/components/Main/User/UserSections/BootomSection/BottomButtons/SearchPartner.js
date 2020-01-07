import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Button = styled.button`
    width: 275px;
    height: 50px;
    background-color: #4DB6AC;
    color: #fff;
    font-family: ${FontStyle.family};
    font-size: 1.5em;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    outline: none;
`

const SearchPartner = () => {
    return (
        <Link to='/findPartner'><Button>Szukaj ogłoszeń</Button></Link>
    )
}

export default SearchPartner;