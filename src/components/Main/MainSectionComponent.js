import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import WavyBackground from '../../assets/img/Mobile/wave-bck-header-mobile.svg';
import FindAnnouncementSection from './SearchPartner/FindAnnouncementSection';
import FoundAnnouncementSection from './SearchPartner/FoundAnnouncementSections';
import { FontStyle } from '../../assets/style/style';
import { FindAnnouncementConsumer } from '../../context/CurrentUser.context';
import MainComponent from './Footer/MainComponent';
// media queries
import Media from 'react-media';
// desktop components
import DesktopHeader from '../Header/DesktopHeader/DesktopHeader';

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
        <FindAnnouncementConsumer>
            {({ announcementList, randomAnnouncement }) => (
                <Container>
                    {/* Desktop */}
                    <Media query="(min-width: 1000px)" render={() =>
                        (
                            <DesktopHeader></DesktopHeader>                     
                        )}
                    />
                    {/* Phone */}
                    <Media query="(max-width: 1000px)" render={() =>
                        (
                            <Header background={`url(${WavyBackground}) no-repeat `}></Header>
                        )}
                    />
                    {/* Phone */}
                    <Media query="(max-width: 1000px)" render={() =>
                        (
                            <React.Fragment>
                                <Text size='1.7em'>Wyszukaj partnera</Text>
                                <FindAnnouncementSection></FindAnnouncementSection>
                            </React.Fragment>
                        )}
                    />
                    {announcementList.size > 0 ? (
                        <React.Fragment>
                            <FoundAnnouncementSection 
                                tittle='Dopasowane osoby:'
                                announcementList={announcementList}
                            ></FoundAnnouncementSection>
                        </React.Fragment>
                    ) : (
                        randomAnnouncement !== undefined ? (
                            <FoundAnnouncementSection 
                            tittle='Może cię zainteresować:'
                            announcementList={randomAnnouncement}
                        ></FoundAnnouncementSection>
                        ) : null 
                    )}
                    
                    {/* Footer */}
                    <MainComponent></MainComponent>
                </Container>
            )}
        </FindAnnouncementConsumer>
      
    )
}

export default MainSectionComponent;
