import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import WavyBackground from '../../assets/img/Mobile/wave-bck-header-mobile.svg'
import UserBoxComponent from './UserUI/UserUIBoxComponent';
import AnnouncementUIBoxComponent from './AnnouncementUI/AnnouncementUIBoxComponent';

const Container = styled.div`
    background-color: #F8FAFB;
`

const BoxComponent = () => {

    return (
        <Container>
            <Header background={`url(${WavyBackground}) no-repeat `}></Header>
            <UserBoxComponent></UserBoxComponent>
            <AnnouncementUIBoxComponent></AnnouncementUIBoxComponent>
            {/* <div>{id}</div> */}
        </Container>
    )
}

export default BoxComponent;