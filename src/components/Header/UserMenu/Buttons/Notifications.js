import React from 'react';
import styled from 'styled-components';
import notificationIco from '../../../../assets/img/Mobile/alarm.svg';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`

`
const Button = styled.button`
    width: 300px;
    height: 35px;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
`
const Ico = styled.div`
    width: 28px;
    height: 26px;
    background-image: url(${notificationIco});
    background-repeat: no-repeat;
    background-size: 18px 16px;
`
const Text = styled.span`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.6em;
    margin-top: -3px;
`

const Notification = () => {
    return (
        <Container>
            <Button>
                <Ico></Ico>
                <Text>Powiadomienia</Text>
            </Button>
        </Container>
    )
}

export default Notification;