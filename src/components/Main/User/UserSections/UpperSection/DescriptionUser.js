import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const Box = styled.div`
    position: relative;
`
const Name = styled.h2`
    text-align: center;
    font-size: 1.6em;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
`
const Age = styled.span`
    position: absolute;
    right: 20px;
    top: 22px;
    font-size: 1.4em;
    font-family: ${FontStyle.family};
    color: #A0A6B1;
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
            <Box>
                <Name>{props.name.replace(/ .*/,'')}</Name>
                <Age>{props.age} lat</Age>
            </Box>
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