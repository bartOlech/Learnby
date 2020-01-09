import React from 'react';
import styled from 'styled-components';
import AppendForm from './Form';
import Header from  '../Header';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`

`
const MainText = styled.h2`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    text-align: center;
    font-size: 2em;
    margin-top: -30px;
    font-weight: 600;
`

const AppendUserData = () => {
    return (
        <Container>
            <Header></Header>
            <MainText>Napisz coś o sobie</MainText>
            <AppendForm></AppendForm>
        </Container>
    )
}

export default AppendUserData;