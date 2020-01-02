import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import WavyBackground from '../../assets/img/Mobile/wave-bck-header-mobile.svg';
import FindAnnouncementSection from './SearchPartner/FindAnnouncementSection';
import FoundAnnouncementSection from './SearchPartner/FoundAnnouncementSections';
import { FontStyle } from '../../assets/style/style';
import { FindAnnouncementConsumer } from '../../context/CurrentUser.context';
import MainComponent from './Footer/MainComponent';
import Loader from 'react-loader-spinner';

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
const LoaderBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;  
`

const MainSectionComponent = () => {
    return (
        <FindAnnouncementConsumer>
            {({ announcementsArray, listID, usersArray }) => (
                <Container>
                    <Header background={`url(${WavyBackground}) no-repeat `}></Header>
                    <Text size='1.7em'>Wyszukaj partnera</Text>
                    <FindAnnouncementSection></FindAnnouncementSection>
                    {usersArray.length > 1 ? (
                        <React.Fragment>
                            <FoundAnnouncementSection 
                                tittle='Dopasowane osoby:'
                                announcementsArray={announcementsArray}
                                usersArray={usersArray}
                                listID={listID}
                                ></FoundAnnouncementSection>

                            <FoundAnnouncementSection 
                                tittle='Może cię zainteresować:'
                                announcementsArray={announcementsArray}
                                usersArray={usersArray}
                                listID={listID}
                            ></FoundAnnouncementSection>
                        </React.Fragment>
                    ) : (
                        <LoaderBox>
                            <Loader
                                type="TailSpin"
                                color="#4DB6AC"
                                height={60}
                                width={60}
                                style={{marginTop: '50px', marginLeft: '-20px'}}
                            />
                        </LoaderBox>
                    )}
                    
                    
                    {/* Footer */}
                    <MainComponent></MainComponent>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default MainSectionComponent;
