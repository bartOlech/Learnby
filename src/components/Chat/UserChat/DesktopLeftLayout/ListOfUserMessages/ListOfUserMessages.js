import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import Users from './Users';

const Container = styled.div`

`
const TittleBox = styled.div`
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid rgba(206, 206, 206, .7);
    display: flex;
    align-items: center;

`
const TittleText = styled.span`
    font-size: 1.3em;
    font-family: ${FontStyle.family};
    color: #76849D;
    text-align: left;
    margin-left: 10px;
`

const ListOfUsereMessages = (props) => {
    return (
        <Container>
            <TittleBox><TittleText>Wszystkie</TittleText></TittleBox>
            <Users userId={props.userId}></Users>
        </Container>
    )
}

export default ListOfUsereMessages;