import React from 'react';
import styled from 'styled-components';
import WaveBck from '../../../assets/img/Mobile/wave-bck-header-mobile.svg';
import MainLogo from '../../../assets/img/logo-LearnBy.svg';
import HamburgerMenu from './HamburgerBtn';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 130px;
    background-image: url(${WaveBck});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
    position: relative;
`
const Logo = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${MainLogo});
    background-repeat: no-repeat;
    background-size: 40px 40px;
    position: absolute;
    top: 11px;
    left: 11px;
    
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
            <Logo></Logo>
            <Text>Rejestracja</Text>
            <HamburgerMenu></HamburgerMenu>
        </Container>
    )
}

export default Header;