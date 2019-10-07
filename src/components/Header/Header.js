import React from 'react';
import styled from 'styled-components';
import MainLogo from '../../assets/img/logo-LearnBy.svg';
import AddNotice from './AddNotice/AddNotice';
import Login from './Login/Login';
import { BrowserRouter as Router, Link} from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #DEF3EB;
`
const Logo = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${MainLogo});
    background-repeat: no-repeat;
    margin: 20px;
`

const Header = () => {
    return (
        <Container>
            <Logo></Logo>
            <Link to='/addNotice'><AddNotice></AddNotice></Link>
            <Link to='/login'><Login></Login></Link>     
        </Container>
    )
}

export default Header;