import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FindAnnouncementConsumer } from '../../../../../context/CurrentUser.context';
import SupportIco from '../../../../../assets/img/Desktop/support.svg';
import SearchPartner from '../../../../Main/User/UserSections/BootomSection/BottomButtons/SearchPartner';

const Container = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
    @media(max-width: 1000px) {
        margin-top: 100px;
    }
    @media(min-width: 1000px) {
        width: 300px;
        flex-direction: row;
        position: absolute;
        top: 200px;
        left: -600px; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto;

    }
    @media(min-width: 1170px) {
        width: 300px;
        position: absolute;
        top: 0;
        bottom: 80px;
        left: 280px;
        flex-direction: column;
        margin-left: 0; 
        margin-right: 0;
    }
    @media(min-width: 1200px) {
        position: absolute;
        bottom: 80px;
        left: 290px;
    }
    @media(min-width: 1300px) {
        position: absolute;
        bottom: 80px;
        left: 300px;
    }
    @media(min-width: 1400px) {
        position: absolute;
        bottom: 80px;
        left: 370px;
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
                    <BoxLine>
                        <Line></Line>
                        <TextLine>Albo</TextLine>
                        <Line></Line>
                    </BoxLine>
                    <SearchPartner></SearchPartner>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default MakeContactButton;