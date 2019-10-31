import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import WavyBackground from '../../assets/img/Mobile/wave-bck-header-mobile.svg';
import FindAnnouncementSection from './SearchPartner/FindAnnouncementSection';
import FoundAnnouncementSection from './SearchPartner/FoundAnnouncementSections';
import { FontStyle } from '../../assets/style/style';
import { FindUserConsumer } from '../../context/CurrentUser.context';
import MainComponent from './Footer/MainComponent';

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 800px;
    background-color: #F8FAFB;
`
const Text = styled.h2`
    text-align: center;
    color: ${FontStyle.color};
    font-family: ${FontStyle.family};
    font-size: ${props => props.size};
    font-weight: 600;
    margin-top: -30px;
`

const MainSectionComponent = () => {
    return (
        <FindUserConsumer>
            {({ announcementsArray, listID }) => (
                <Container>
                    <Header background={`url(${WavyBackground}) no-repeat `}></Header>
                    <Text size='1.7em'>Wyszukaj partnera</Text>
                    <FindAnnouncementSection></FindAnnouncementSection>
                    <FoundAnnouncementSection 
                        tittle='Dopasowane osoby:'
                        announcementsArray={announcementsArray}
                        listID={listID}
                    ></FoundAnnouncementSection>
                    <FoundAnnouncementSection 
                        tittle='Może cię zainteresować:'
                        announcementsArray={announcementsArray}
                        listID={listID}
                    ></FoundAnnouncementSection>
                    {/* Footer */}
                    <MainComponent></MainComponent>
                </Container>
            )}
        </FindUserConsumer>
    )
}

export default MainSectionComponent;