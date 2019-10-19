import React from 'react';
import styled from 'styled-components';
import TextBackgroundGreen from '../../../assets/img/Mobile/main-page-text-bck-green-2.svg';
import TextBackgroundCyan from '../../../assets/img/Mobile/main-page-text-bck-cyan-2.svg';
import TextBackgroundYellow from '../../../assets/img/Mobile/main-page-text-bck-yellow1.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
`
const SideTextBck1 = styled.div`
    width: 100%;
    max-width: 400px;
    height: 210px;
    margin-bottom: 60px;
    background-image: url(${TextBackgroundGreen});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 0;
    @media (max-width: 390px) {
        width: 300px; 
        background-size: 300px 200px;
    }
`
const SideTextBck2 = styled.div`
    width: 100%;
    max-width: 400px;
    height: 210px;
    margin-bottom: 60px;
    background-image: url(${TextBackgroundYellow});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    right: 0;
    top: 260px;
    @media (max-width: 390px) {
        top: 200px;
        width: 300px; 
        background-size: 300px 200px;
    }
`
const SideTextBck3 = styled.div`
    width: 100%;
    max-width: 400px;
    height: 210px;
    background-image: url(${TextBackgroundCyan});
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 230px;
    @media (max-width: 390px) {
        margin-top: 115px;
        width: 300px; 
        background-size: 300px 200px;
    }
`

const SideTextSection = () => {
    return (
        <Container>
            <SideTextBck1></SideTextBck1>
            <SideTextBck2></SideTextBck2>
            <SideTextBck3></SideTextBck3>
        </Container>
    )
}

export default SideTextSection;