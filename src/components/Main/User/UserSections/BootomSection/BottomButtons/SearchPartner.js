import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Button = styled.button`
    width: 300px;
    height: 50px;
    background-color: #3AAF9F;
    color: #fff;
    font-family: ${FontStyle.family};
    font-size: 1.4em;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    outline: none;
    font-weight: 600;
`

const SearchPartner = () => {
    return (
        <Link to='/findPartner'><Button>Szukaj więcej ogłoszeń</Button></Link>
    )
}

export default SearchPartner;