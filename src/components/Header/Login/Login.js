import React from 'react';
import styled from 'styled-components';
import LoginIco from '../../../assets/img/Mobile/user.svg';
import Media from 'react-media';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    position: relative;
    width: 41px;
    height: 41px;
    margin: 17px 20px 0 -20px;
    @media(min-width: 1000px) {
        width: 160px;
        height: 41px;
    }
`
const IcoButton = styled.div`
    width: 41px;
    height: 41px;
    
    padding: 0;
    background-image: url(${LoginIco});
    background-size: cover;
    background-repeat: no-repeat;
`
const DesktopButton = styled.button`
    width: 160px;
    height: 41px;
    background-color: #3AB397;
    background-color: ${props => props.background};
    border: none;
    border-radius: 30px;
    text-align: center;
    font-family: ${FontStyle.family};
    color: #fff;
    font-size: 1.4em;
    font-weight: 600;
    padding-bottom: 6px;
    cursor: pointer;
    outline: none;
    margin-left: ${props => props.marginLeft};
    padding-top: 3px;
`

const Login = (props) => {

    return (
        <Container>
            <Media query="(min-width: 1000px)" render={() =>
                (
                    <DesktopButton marginLeft={props.marginLeft} background={props.background}>Zaloguj się</DesktopButton>
                )}
            />
            <Media query="(max-width: 1000px)" render={() =>
                (
                    <IcoButton></IcoButton>
                )}
            />
        </Container>
    )
}

export default Login;