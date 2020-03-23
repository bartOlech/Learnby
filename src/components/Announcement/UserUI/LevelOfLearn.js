import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 250px;
    height: 50px;
    margin-left: 10px;
    margin-top: 15px;
    @media(min-width: 1000px) {
        position: absolute;
        left: 1px;
        top: 150px;
    }
`
const LevelOfLearning = styled.div`
    display: flex;
    justify-content: space-around;
`
const LevelText = styled.div`
    color: #76849D;
    font-family: ${FontStyle.family};
    font-size: 1.3em;
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

const LevelOfLearn = (props) => {

    const knowledgeDots = (val) => {
        let indents = [];
        let emptyDots = 5 - val
        let key = 0

        for (let i = 0; i < val; i++) {
            indents.push(<Dot key={key} background='#3AAF9F'></Dot>);
            key++
        }
        for (let i = 0; i < emptyDots; i++) {
            indents.push(<Dot key={key + 5} background='#fff'></Dot>);
            key++
        }
        return indents;
    }

    return (
        <Container>
            <LevelOfLearning>
                <LevelText>Poziom:</LevelText>
                <LevelDotted data-testid='levelDotted'>
                    {/* function that return quantity of green dots */}
                    {knowledgeDots(props.level)}
                </LevelDotted>
            </LevelOfLearning>
        </Container>
    )
}

export default LevelOfLearn;