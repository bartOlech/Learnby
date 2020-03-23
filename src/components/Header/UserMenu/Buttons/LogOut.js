import React from 'react';
import styled from 'styled-components';
import logOutIco from '../../../../assets/img/Mobile/logout.svg';
import { FontStyle } from '../../../../assets/style/style';
import firebase from '../../../../Firebase.config';
import { CurrentUserConsumer } from '../../../../context/CurrentUser.context';

const Container = styled.div`

`
const Button = styled.div`
    width: 300px;
    height: 35px;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    margin-top: 9px;
`
const Ico = styled.div`
    width: 28px;
    height: 26px;
    background-image: url(${logOutIco});
    background-repeat: no-repeat;
    background-size: 18px 16px;
    margin-left: 8px;
    margin-top: 3px;
`
const Text = styled.span`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.1em;
    margin-left: 0;
`

const LogOut = () => {
    return (
        <CurrentUserConsumer>
            {({ logout }) => (
                <Container>
                <Button onClick={() => {
                    logout()
                    firebase.logout()
                }}>
                    <Ico></Ico>
                    <Text>Wyloguj</Text>
                </Button>
                </Container>
            )}
        </CurrentUserConsumer>
    )
}

export default LogOut;