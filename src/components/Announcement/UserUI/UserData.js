import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 270px;
    height: 200px;
    margin-top: 7px;
`
const MainData = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    position: relative;
`
const Name = styled.div`
    color: #A0A6B1;
    font-family: ${FontStyle.family};
    font-size: 1.2em;
    position: absolute;
    left: 15px;
    cursor: pointer;
`
const Line = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color: #A0A6B1;
    cursor: pointer;
`
const Age = styled.div`
    color: #A0A6B1;
    font-family: ${FontStyle.family};
    font-size: 1.2em;
    position: absolute;
    right: 20px;
`
const LevelOfLearning = styled.div`
    display: flex;
    justify-content: space-around;
`
const LevelText = styled.div`
    color: #A0A6B1;
    font-family: ${FontStyle.family};
    font-size: 1.2em;
`
const LevelDotted = styled.div`
    display: flex;
`
const Dot = styled.div`
    margin-left: 5px;
    width: 20px;
    height: 20px;
    border: 2px solid #3AAF9F;
    background-color: ${props => props.background};
    border-radius: 50%;
`

const UserData = () => {
    return (
        <Container>
            <MainData>
                <Name>Mateusz<Line></Line></Name>
                <Age>21 lat</Age>
            </MainData>
            <LevelOfLearning>
                <LevelText>Poziom:</LevelText>
                <LevelDotted>
                    <Dot background='#3AAF9F'></Dot>
                    <Dot background='#fff'></Dot>
                    <Dot background='#fff'></Dot>
                    <Dot background='#fff'></Dot>
                    <Dot background='#fff'></Dot>
                </LevelDotted>
            </LevelOfLearning>
        </Container>
    )
}

export default UserData;