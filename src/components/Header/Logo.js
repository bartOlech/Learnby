import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo-LearnBy.svg'
import { BrowserRouter as Router, Link} from 'react-router-dom';

const Container = styled.div`
    width: 42px;
    height: 42px;
    background-image: url(${logo});
    background-size: 42px 42px;
    background-repeat: no-repeat;
    margin: 16px 0 15px 13px;
`

const Logo = () => {
    return (
        <Link to='/'><Container></Container></Link>
    )   
}

export default Logo;