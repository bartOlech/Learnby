import React from 'react';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import UpperBackgroundBoxText from './UpperBackgroundBoxText';

const Container = styled.div`
    width: 100%;
    height: 300px;
    background: #009F89;
    margin-top: -50px;
    margin-bottom: 100px;
    position: relative;
    ::after { 
        content: '';
        width: 550px;
        height: 550px;
        opacity: .1;
        background-color: #fff;
        position: absolute;
        top: -100px;
        right: 650px;
        border-radius: 50%;
        @media (max-width: 1030px) {
            display: none;
        }
        @media (max-width: 1173px) {
            right: 530px;
        }
    }
    ::before { 
        content: '';
        width: 150px;
        height: 150px;
        opacity: .2;
        background-color: #fff;
        position: absolute;
        top: 220px;
        right: 60px;
        border-radius: 50%;
        @media (max-width: 1030px) {
            display: none;
        }
    }
`

const UpperBackgroundBox = () => {
    return (
        <Container>
            <Link to='/login'><LoginButton></LoginButton></Link>
            <UpperBackgroundBoxText></UpperBackgroundBoxText>
        </Container>
    )
}

export default UpperBackgroundBox;