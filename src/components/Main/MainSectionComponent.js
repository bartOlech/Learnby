import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import WavyBackground from '../../assets/img/Mobile/wave-bck-header-mobile.svg';
import FindUserSection from './Search/FindUserSection';
import { FontStyle } from '../../assets/style/style';

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
        <Container>
            <Header background={`url(${WavyBackground}) no-repeat `}></Header>
            <Text size='1.7em'>Wyszukaj partnera</Text>
            <FindUserSection></FindUserSection>
            <Text style={{marginTop: '50px', marginLeft: '-100px'}} size='1.5em'>Dopasowane osoby:</Text>
        </Container>
    )
}

export default MainSectionComponent;