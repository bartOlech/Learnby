import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FindAnnouncementConsumer } from '../../../context/CurrentUser.context';

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

const UserData = (props) => {

    const knowledgeDots = (val) => {
        let indents = [];
        let emptyDots = 5 - val

        for (let i = 0; i < val; i++) {
            indents.push(<Dot background='#3AAF9F'></Dot>);
        }
        for (let i = 0; i < emptyDots; i++) {
            indents.push(<Dot background='#fff'></Dot>);
        }
        return indents;
    }

    return (
        <FindAnnouncementConsumer>
            {({ getUserData, selectedAnnouncementData, getUserAnnouncementsFromUserCollection }) => (
                <Container>
                    <MainData>
                        <Link to={{pathname: `/user/${selectedAnnouncementData[0].AnnouncementCreator.UserId}`}}><Name onClick={()=> {
                            getUserAnnouncementsFromUserCollection(selectedAnnouncementData[0].AnnouncementCreator.UserId)
                            getUserData()
                        }}>{props.name.replace(/ .*/,'')}<Line></Line></Name></Link>
                        <Age>{props.age} lat</Age>
                    </MainData>
                    <LevelOfLearning>
                        <LevelText>Poziom:</LevelText>
                        <LevelDotted>
                            {/* function that return quantity of green dots */}
                            {knowledgeDots(selectedAnnouncementData[0].LevelOfKnowledge)}
                        </LevelDotted>
                    </LevelOfLearning>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default UserData;