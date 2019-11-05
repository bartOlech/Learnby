import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import { BrowserRouter as Router, useParams } from 'react-router-dom'
import WavyBackground from '../../assets/img/Mobile/wave-bck-header-mobile.svg'
import UserBoxComponent from './UserUI/UserUIBoxComponent';
import AnnouncementUIBoxComponent from './AnnouncementUI/AnnouncementUIBoxComponent';

const Container = styled.div`

`

const BoxComponent = () => {

    let { id }  = useParams();

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