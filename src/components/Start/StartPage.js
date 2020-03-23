import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from "react-router-dom";

import FindPartnerBtn from './FindPartnerBtn';
import Header from '../Header/Header';
import LearnMoreBtn from './LearnMoreBtn';
import HowItWorkSection from './StartLayout/SideTextSectioDesktop/HowItWorks/HowItWorksSection';
import HorizontalLine from './StartLayout/HorizontalLine';
import Join from './StartLayout/JoinSection/Join';
// footer
import FooterSection from '../Footer/FooterSection';

// style
import { FontStyle } from '../../assets/style/style';
import Media from 'react-media';

import BackgroundImgMobile from '../../assets/img/Mobile/main-background-img.svg';
import WaveBckVector from '../../assets/img/wave-bck-mobile-main-page.svg';
import WavesDesktop from '../../assets/img/Desktop/wavesBck-desktop.svg';
import PersonIco from '../../assets/img/Desktop/main-page-person-desktop.svg';
import SideTextSectionDesktop from './StartLayout/SideTextSectioDesktop/SideTextSectioDesktop';

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
    @media (min-width: 1000px) {
        align-items: left;
        background-color: #fff;    
        width: 400px;
    }
    
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
    @media (min-width: 1000px) {
        /* text-align: center; */
    }
`
const AuxiliaryText = styled.h2`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    padding: 0;
    margin: 80px 20px 80px 20px;  
    text-align: center;
    font-weight: 400; 
    @media (min-width: 1000px) {
        text-align: left;
        color: #707070;
        margin-left: 50px;
    }
`
const CompanyName = styled.span`
    font-family: ${FontStyle.family};
    color: #1F9B8F;
    margin: 0;
    padding: 0;
    text-align: center;
    font-style: italic;
    font-weight: 600;
    @media (min-width: 1000px) {
        color: #3AB397;
    }
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
    @media (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`
const BackgroundMainImg = styled.div`
    width: 304px;
    height: 190px;
    background-image: url(${BackgroundImgMobile});
    background-repeat: no-repeat;
    background-size: cover;
    @media (min-width: 1000px) {
        margin-top: 100px;
        width: 404px;
        height: 290px;
        background-size: 404px 290px;
    }
`
const AboutMainText = styled.h3`
    font-family: ${FontStyle.family};
    font-size: 1.6em;
    font-weight: 500;
    color: ${FontStyle.color};
    text-align: center;
    margin-top: 50px;
    @media (min-width: 1000px) {
        width: 30%;
        padding-top: 80px;
    }
`
// Desktop styles
const BackgroundWavesDesktop = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${WavesDesktop});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
`
const CompanyNameDesktop = styled.h1`
    font-size: 3.5em;
    font-weight: 600;
    color: #3AB397;
    /* margin-left: -110px; */
    margin-top: 60px;
    margin-bottom: -60px;
    text-align: center;
`
const VectorPersonImage = styled.div`
    width: 50%;
    height: 60%;
    background-image: url(${PersonIco});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0;
    right: 0;
`
const AuthorText = styled.span`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.1em;
    padding-top: 20px;
    font-weight: 200;
`
const AboutMainTextDesktop = styled.h3`
    font-family: ${FontStyle.family};
    font-size: 2.6em;
    font-weight: 300;
    color: ${FontStyle.color};
    text-align: center;
    margin-top: 50px;
    position: relative;
    z-index: 1;
    @media (min-width: 1000px) {
        width: 80%;
        display: flex;
    }
   
    }
    &&:before {
        content: '';
        width: 60px;
        height: 5px;
        background-color: #00A089;
        position: absolute;
        opacity: .65;
        top: -85px;
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        border-radius: 5px;
    }
`
const StartPage = () => {
    // const { height, width } = useWindowDimensions();

    return (
        <Container>
                {/* Phone */}
                <Media query="(max-width: 1000px)" render={() =>
                    (
                        <Header background='#DEF3EB'></Header>
                    )}
                />
                {/* Desktop */}
                <Media query="(min-width: 1000px)" render={() =>
                    (
                        <React.Fragment>
                            <BackgroundWavesDesktop>
                                <VectorPersonImage></VectorPersonImage>
                            </BackgroundWavesDesktop>
                            <Header shadow='none' background='#fff'></Header>
                        </React.Fragment>                        
                    )}
                />
                <Main>
                    {/* Phone */}
                    <Media query="(max-width: 1000px)" render={() =>
                        (
                            <MainText>Szukasz partnera do nauki?<br></br>Załóż konto juz teraz!</MainText>
                        )}
                    />
                    {/* Desktop */}
                    <Media query="(min-width: 1000px)" render={() =>
                        (
                            <CompanyNameDesktop>Uczmy się razem </CompanyNameDesktop> 
                        )}
                    />
                    <AuxiliaryText>
                        <CompanyName>Learnby </CompanyName> 
                        zrzesza osoby chcące urozmaicić swoją naukę poprzez prace w parze lub grupie osób
                    </AuxiliaryText>
                    <Link style={{ textDecoration: 'none' }} to='/findPartner'><FindPartnerBtn></FindPartnerBtn></Link>
                </Main>
                <Media query="(max-width: 1000px)" render={() =>
                    (
                        <WaveBck></WaveBck>
                    )}
                />
                <LearnMoreBtn></LearnMoreBtn>
                {/* Desktop */}
                <Media query="(min-width: 1000px)" render={() =>
                    (
                        <AboutSection style={{marginTop: '230px', marginBottom: '100px'}}>              
                            <AboutMainText>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    "Nie mogłam znaleźć nikogo kto podzielałby wraz ze mną te same pasję. Ta platforma jest rozwiązaniem"
                                    <AuthorText>Weronika</AuthorText>
                                </div>
                            </AboutMainText>
                            <BackgroundMainImg></BackgroundMainImg>
                            <AboutMainText>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    "Fajny pomysł. Na pewno wykorzystam platformę do poprawy mojego Jezyka Angielskiego"
                                    <AuthorText>Mateusz</AuthorText>
                                </div>
                            </AboutMainText>
                            </AboutSection>
                    )}
                />
                {/* Phone */}
                <AboutSection> 
                    <Media query="(max-width: 1000px)" render={() =>
                        (
                            <React.Fragment>
                                <BackgroundMainImg></BackgroundMainImg>
                                <AboutMainText>
                                    Nauka samemu często nie jest ciekawa, przez co twoja efektywność i zapał może szybko wygasnąć
                                </AboutMainText>
                            </React.Fragment>    
                        )}
                    />
                {/* Desktop */}
                <Media query="(min-width: 1000px)" render={() =>
                    (
                        <AboutMainTextDesktop>
                            Nauka samemu często nie jest ciekawa, przez co twoja efektywność i zapał może szybko wygasnąć
                        </AboutMainTextDesktop>
                    )}
                />
                </AboutSection>
            <SideTextSectionDesktop></SideTextSectionDesktop>
            <HowItWorkSection></HowItWorkSection>
            <Join></Join>
            <HorizontalLine></HorizontalLine>
            <FooterSection></FooterSection>
        </Container>
    )
}

export default StartPage;