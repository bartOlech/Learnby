import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Button = styled.button`
    width: 240px;
    height: 55px;
    background-color: #fff;
    border-radius: 40px;
    border: 0;
    font-family: ${FontStyle.family};
    font-size: 1.5em;
    color: black;
    position: absolute;
    right: 280px;
    top: 115px;
    cursor: pointer;
    outline: none;
    @media (max-width: 1030px) {
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top: 190px;
    }
`

const UpperBackgroundBox = () => {
    return (
        <Button>
            Zacznij naukę
        </Button>
    )
}

export default UpperBackgroundBox;