import React from 'react';
import styled from 'styled-components';
import MainLogo from '../../assets/img/logo-LearnBy.svg';
import AddNotice from './AddNotice/AddNotice';
import Login from './Login/Login';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { CurrentUserConsumer } from '../../context/CurrentUser.context';
import { FontStyle } from '../../assets/style/style';

const Container = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: ${props => props.background};
    background-size: cover;
`
const Logo = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${MainLogo});
    background-repeat: no-repeat;
    margin: 20px;
`
const UserSection = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
`
const LogoutButton = styled.p`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.3em;
    padding-top: 5px;
    padding-right: 17px;
    cursor: pointer;
`
const TextUnderLine = styled.div`
    width: 72px;
    height: 2px;
    background-color: ${FontStyle.color};
    position: absolute;
    top: 52px;
`
const Header = (props) => {
    return (
        <Container background={props.background}>
            <Logo></Logo>
            <Link to='/addApplication'><AddNotice></AddNotice></Link>
            <CurrentUserConsumer>
                {({logout, user}) => (
                    user ? (
                        <UserSection>
                            <LogoutButton onClick={logout}>Wyloguj</LogoutButton>
                            <TextUnderLine></TextUnderLine>
                        </UserSection> 
                    ):(
                        <React.Fragment>
                            <Link to='/login'><Login></Login></Link> 
                        </React.Fragment>
                    )
                    
                )}
            </CurrentUserConsumer>    
        </Container>
    )
}

export default Header;