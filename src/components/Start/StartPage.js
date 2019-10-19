import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from "react-router-dom";

import FindPartnerBtn from './FindPartnerBtn';
import Header from '../Header/Header';
import LearnMoreBtn from './LearnMoreBtn';
import SideTextSection from './StartLayout/SideTextSection';
import HowItWorkSection from './StartLayout/HowItWorksSection';
import HorizontalLine from './StartLayout/HorizontalLine';
import Join from './StartLayout/JoinSection/Join';
// footer
import FooterSection from '../Footer/FooterSection';

// style
import { FontStyle } from '../../assets/style/style';

import BackgroundImgMobile from '../../assets/img/Mobile/main-background-img.svg';
import WaveBckVector from '../../assets/img/wave-bck-mobile-main-page.svg';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #FFFFFF;
`
const Main = styled.div`
    width: 100%;
    height: 60vh;
    max-height: 500px;
    margin: 0;
    padding: 10px 0 0 0;
    background-color: #DEF3EB;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const WaveBck = styled.div`
    width: 100%;
    height: 20vh;
    background-image: url(${WaveBckVector});
    background-repeat: no-repeat;
`
const MainText = styled.h1`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    margin: 0;
    padding: 0;
    text-align: center;
`
const AuxiliaryText = styled.h2`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    padding: 0;
    margin: 80px 20px 80px 20px;  
    text-align: center;
    font-weight: 400; 
`
const CompanyName = styled.span`
    font-family: ${FontStyle.family};
    color: #1F9B8F;
    margin: 0;
    padding: 0;
    text-align: center;
    font-style: italic;
    font-weight: 600;
`
// About Section

const AboutSection = styled.div`
    width: 100%;
    height: 100%;
    margin: 60px 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const BackgroundMainImg = styled.div`
    width: 304px;
    height: 190px;
    background-image: url(${BackgroundImgMobile});
    background-repeat: no-repeat;
    background-size: cover;
`
const AboutMainText = styled.h3`
    font-family: ${FontStyle.family};
    font-size: 1.6em;
    font-weight: 500;
    color: ${FontStyle.color};
    text-align: center;
    margin-top: 50px;
`

const StartPage = () => {

    return (
        <Container>
            <Header background='#DEF3EB'></Header>
            <Main>
                <MainText>Szukasz partnera do nauki?<br></br>Załóz konto juz teraz!</MainText>
                <AuxiliaryText>
                    <CompanyName>Learnby </CompanyName> 
                    zrzesza osoby chcące urozmaicić swoją naukę poprzez prace w parze lub grupie osób
                </AuxiliaryText>
                <Link style={{ textDecoration: 'none' }} to='/findPartner'><FindPartnerBtn></FindPartnerBtn></Link>
            </Main>
            <WaveBck></WaveBck>
            <LearnMoreBtn></LearnMoreBtn>
            <AboutSection>
                <BackgroundMainImg></BackgroundMainImg>
                <AboutMainText>
                    Nauka samemu często nie jest ciekawa, przez co twoja efektywność i zapał może szybko wygasnąć
                </AboutMainText>
            </AboutSection>
            <SideTextSection></SideTextSection>
            <HowItWorkSection></HowItWorkSection>
            <Join></Join>
            <HorizontalLine></HorizontalLine>
            <FooterSection></FooterSection>
        </Container>
    )
}

export default StartPage;