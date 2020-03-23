import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FindAnnouncementConsumer } from '../../../context/CurrentUser.context';
import LevelOfLearn from './LevelOfLearn';
// media queries
import Media from 'react-media';

const Container = styled.div`
    width: 100%;
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
    color: #76849D;
    font-family: ${FontStyle.family};
    font-size: 1.2em;
    position: absolute;
    left: 15px;
    cursor: pointer;
    @media(min-width: 1000px) {
        top: 15px;
        left: 25px;
    }
`
const Line = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color: #76849D;
    cursor: pointer;
`
const Age = styled.div`
    width: 50px;
    color: #76849D;
    font-family: ${FontStyle.family};
    font-size: 1.2em;
    position: absolute;
    left: 130px;
    top: 2px;
`


const UserData = (props) => {

    return (
        <FindAnnouncementConsumer>
            {({ getUserData, selectedAnnouncementData, getUserAnnouncementsFromUserCollection }) => (
                <div>
                    {/* Phone */}
                    <Media query="(max-width: 1000px)" render={() =>
                        (
                            <Container>
                                <MainData style={{marginTop: '28px'}}>
                                    <Link to={{pathname: `/user/${selectedAnnouncementData[0].AnnouncementCreator.UserId}`}}><Name 
                                    data-testid='name'
                                    onClick={()=> {
                                        getUserAnnouncementsFromUserCollection(selectedAnnouncementData[0].AnnouncementCreator.UserId)
                                        getUserData()
                                    }}>{props.name.replace(/ .*/,'')}<Line></Line></Name></Link>
                                    <Age >{props.age} lat</Age>
                                </MainData>
                            </Container>
                        )}
                    />
                    {/* Desktop */}
                    <Media query="(min-width: 1000px)" render={() =>
                        (
                            <Container>
                                <MainData>
                                    <Link to={{pathname: `/user/${selectedAnnouncementData[0].AnnouncementCreator.UserId}`}}><Name onClick={()=> {
                                        getUserAnnouncementsFromUserCollection(selectedAnnouncementData[0].AnnouncementCreator.UserId)
                                        getUserData()
                                    }}>{props.name.replace(/ .*/,'')}<Line></Line></Name></Link>
                                </MainData>
                            </Container>                      
                        )}
                    />
                </div>
            )}
        </FindAnnouncementConsumer>
    )
}

export default UserData;