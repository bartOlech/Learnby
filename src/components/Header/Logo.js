import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo-LearnBy.svg';
import desktopLogo from '../../assets/img/Desktop/Logo-desktop.svg';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Media from 'react-media';

const LogoMobile = styled.div`
    width: 42px;
    height: 42px;
    background-image: url(${logo});
    background-size: 42px 42px;
    background-repeat: no-repeat;
    margin: 16px 0 15px 13px;
`
const LogoDesktop = styled.div`
    width: 240px;
    height: 240px;
    background-image: url(${desktopLogo});
    background-size: 240px 240px;
    background-repeat: no-repeat;
    margin: -80px 0 15px 50px;
`

const Logo = () => {
    return (
        <React.Fragment>
            <Media query="(max-width: 1000px)" render={() =>
                (
                    <Link to='/'><LogoMobile></LogoMobile></Link>
                )}
            />
            <Media query="(min-width: 1000px)" render={() =>
                (
                    <Link to='/'><LogoDesktop></LogoDesktop></Link>
                )}
            />
        </React.Fragment>
        
    )   
}

export default Logo;