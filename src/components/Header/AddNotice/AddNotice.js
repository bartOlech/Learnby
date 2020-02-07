import React from 'react';
import styled from 'styled-components';
import ico from '../../../assets/img/Mobile/plus.svg';
import desktopIco from '../../../assets/img/Desktop/plus.svg';
import { FontStyle } from '../../../assets/style/style';
import { BrowserRouter as Router, Link} from 'react-router-dom';

const Container = styled.div`
    width: 152px;
    height: 41px;
    margin-top: 17px;
    margin-right: -100px;
    position: absolute;
    right: 200px;
    top: 0;
    @media (min-width: 1000px) {
        position: absolute;
        right: 350px;
        top: 0;
    }
`
const Box = styled.button`
    width: 160px;
    height: 41px;
    background-color: #4DB6AC;
    border-radius: 22px;
    display: flex;
    border: none;
    position: relative;
    outline: none;
    cursor: pointer;
    @media (min-width: 1000px) {
        background-color: ${props => props.background};
    }
`
const Ico = styled.div`
    width: 15px;
    height: 15px;
    /* background-image: url(${ico}); */
    background-image: ${props => props.image};
    background-repeat: no-repeat;
    background-size: 15px 15px;
    position: absolute;
    top: 12px;
    left: 15px;
`
const Text = styled.p`
    font-family: ${FontStyle.family};
    font-size: 1.9em;
    color: black; 
    color: ${props => props.color};
    text-decoration: none;
    position: absolute;
    top: -15px;
    right: 17px;
    font-weight: 600;
`

const AddNotice = (props) => {
    return (
        <Container>
            <Link to='/createAnnouncement'>
                <Box background={props.background}>
                    <Ico image={props.image}></Ico>
                    <Text color={props.color}>Ogłoszenie</Text>
                </Box>
            </Link>
        </Container>
    )
}

export default AddNotice;