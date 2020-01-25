import React from 'react';
import styled from 'styled-components';
import LoginIco from '../../../assets/img/Mobile/user.svg';
import Media from 'react-media';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    position: relative;
`
const IcoButton = styled.div`
    width: 41px;
    height: 41px;
    margin: 17px 20px 0 38px;
    padding: 0;
    background-image: url(${LoginIco});
    background-size: cover;
    background-repeat: no-repeat;
`
const DesktopButton = styled.button`
    width: 180px;
    height: 41px;
    background-color: #3AB397;
    border: none;
    border-radius: 30px;
    text-align: center;
    font-family: ${FontStyle.family};
    color: #fff;
    font-size: 1.4em;
    font-weight: 600;
    margin: 17px 20px 0 38px;
    padding-bottom: 6px;
`

const Login = () => {

    return (
        <Container>
            <Media query="(min-width: 1000px)" render={() =>
                (
                    <DesktopButton>Zaloguj się</DesktopButton>
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