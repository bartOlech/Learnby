import React from 'react';
import styled from 'styled-components';
import MainLogo from '../../../assets/img/logo-LearnBy.svg';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import HamburgerMenu from './HamburgerBtn';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #2DBAAD;
    box-shadow: -1px 2px 10px -6px rgba(0,0,0,0.75);
    margin: 0;
    padding: 0;
    position: relative;
`
const Logo = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${MainLogo});
    background-repeat: no-repeat;
    background-size: 40px 40px;
    position: absolute;
    top: 11px;
    left: 11px;
    cursor: pointer;
`
const Text = styled.h2`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.9em;
    text-align: center;
    font-weight: 600;
    position: absolute;
    left: 0;
    right: 0;
    top: -12px;
`

const Header = () => {
    return (
        <Container>
            <Link to='/'><Logo></Logo></Link>
            <Text>Logowanie</Text>
            <HamburgerMenu></HamburgerMenu>
        </Container>
    )
}

export default Header;