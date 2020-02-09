import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import WavyBackground from '../../assets/img/Mobile/wave-bck-header-mobile.svg'
import UserBoxComponent from './UserUI/UserUIBoxComponent';
import AnnouncementUIBoxComponent from './AnnouncementUI/AnnouncementUIBoxComponent';
// media queries
import Media from 'react-media';
// desktop components
import DesktopHeader from '../Header/DesktopHeader/DesktopHeader';

const Container = styled.div`
    background-color: #fff;
`

const BoxComponent = () => {

    return (
        <Container>
            {/* Desktop */}
            <Media query="(min-width: 1000px)" render={() =>
                (
                    <DesktopHeader displayText='none' height='83px' displaySearchInput='none'></DesktopHeader>                     
                )}
            />
            {/* Phone */}
            <Media query="(max-width: 1000px)" render={() =>
                (
                    <Header background={`url(${WavyBackground}) no-repeat `}></Header>
                )}
            />
            <UserBoxComponent></UserBoxComponent>
            <AnnouncementUIBoxComponent></AnnouncementUIBoxComponent>
            {/* <div>{id}</div> */}
        </Container>
    )
}

export default BoxComponent;