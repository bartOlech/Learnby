import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const NameBox = styled.div`
    position: relative;
    width: 400px;
    display: flex;
    justify-content: center;
`
const Name = styled.h2`
    text-align: center;
    font-size: 1.6em;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
`
const Age = styled.span`
    font-size: 1.4em;
    font-family: ${FontStyle.family};
    color: #A0A6B1;
    margin-top: 23px;
    margin-left: 20px;
`
const MainDescription = styled.div`
    text-align: center;
    font-size: 1.4em;
    font-family: ${FontStyle.family};
    color: #A0A6B1;
    margin: 5px 10px 15px 10px;
`
const Line = styled.div`
    width: 100px;
    height: 6px;
    border-radius: 5px;
    background-color: #DEF3EB;
    margin: 0 auto;
`
const AdditionalData = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`
const City = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.3em;
`
const Sex = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.3em;
`

const Description = (props) => {
    return (
        <Container>
            <NameBox>
                <Name>{props.name.replace(/ .*/,'')}</Name>
                <Age>{props.age} lat</Age>
            </NameBox>
            <MainDescription>{props.description}</MainDescription>
            <Line></Line>
            <AdditionalData>
                <City>{props.place} /&nbsp;</City>
                <Sex>{props.sex}</Sex>
            </AdditionalData>
        </Container>
    )
}

export default Description;