import React from 'react';
import styled from 'styled-components';
import MoreIco from '../../assets/img/Mobile/more.svg';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: -20px 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (min-width: 1000px) {
        justify-content: left;
        margin-top: -10px;
        &&:before {
            content: '';
            margin-left: 50px;
        }
    }
    cursor: pointer;
`
const Text = styled.div`
    z-index: 1;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.6em;
    font-weight: 200;
    color: #262F3F;
    margin-right: 10px;
    position: relative;
    
`
const Ico = styled.div`
    width: 65px;
    height: 65px;
    background-image: url(${MoreIco});
    background-repeat: no-repeat;
    background-size: 65px, 65px;
    margin-top: -16px;
    margin-left: 10px;
`


const LearnMoreBtn = () => {

    const handleButton = () => {
        console.log('click!')
    }
    

    return (
        <Container onClick={handleButton}>
            <Text>Dowiedz się więcej</Text>
            <Ico></Ico>
        </Container>
    )
}

export default LearnMoreBtn;