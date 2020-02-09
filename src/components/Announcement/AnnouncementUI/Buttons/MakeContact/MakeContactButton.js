import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FindAnnouncementConsumer } from '../../../../../context/CurrentUser.context';
import SupportIco from '../../../../../assets/img/Desktop/support.svg';
import SearchPartner from '../../../../Main/User/UserSections/BootomSection/BottomButtons/SearchPartner';
// media queries
import Media from 'react-media';

const Container = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    /* position: absolute; */
    /* top: 230px; */
    @media(min-width: 1000px) {
        flex-direction: row;
        justify-content: flex-end;
        position: absolute;
        right: 35px;
        top: 230px;
    }
    @media(min-width: 1170px) {
        right: 35px;
        top: 149px;
    }
`
const Button = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 25px;
    background-color: #3AAF9F;  
    border: none;
    font-family: ${FontStyle.family};
    text-align: center;
    font-weight: 600;
    color: #fff;
    font-size: 1.4em;
    cursor: pointer;
    outline: none;
    padding-left: 60px;
    padding-bottom: 5px;
    position: relative;
    margin-top: 90px;
    @media(min-width: 1000px) {
        margin-right: 50px;
        margin-top: 0;
    }
`
const Ico = styled.div`
    width: 39px;
    height: 39px;
    background-image: url(${SupportIco}) ;
    background-repeat: no-repeat;
    background-size: 39px 39px;
    position: absolute;
    left: 25px;
    top: 3px;
`
const BoxLine = styled.div`
    display: flex;
    justify-content: center;
`
const Line = styled.div`
    width: 96px;
    height: 2px;
    background-color: #A0A6B1;
    border-radius: 15px;
    margin: 32px 10px 20px 10px;
`
const TextLine = styled.div`
    font-family: ${FontStyle.family};
    font-size: 1.3em;
    color: #A0A6B1;
    padding: 20px 10px 20px 10px;
`

const MakeContactButton = (props) => {
    return (
        <FindAnnouncementConsumer>
            {({ createUserChatRoom, selectedAnnouncementData }) => (
                <Container>
                    <Link onClick={() => {
                        createUserChatRoom(selectedAnnouncementData[0].AnnouncementCreator.UserId)
                    }} to={{pathname: `/chat/${props.selectedAnnouncementData[0].AnnouncementCreator.UserId}`}}><Button>Nawiąż współpracę<Ico></Ico></Button></Link>
                    {/* Phone */}
                    <Media query="(max-width: 1000px)" render={() =>
                        (
                            <BoxLine>
                                <Line></Line>
                                <TextLine>Albo</TextLine>
                                <Line></Line>
                            </BoxLine>
                        )}
                    />
                    <SearchPartner></SearchPartner>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default MakeContactButton;