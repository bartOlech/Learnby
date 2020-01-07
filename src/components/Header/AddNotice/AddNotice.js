import React from 'react';
import styled from 'styled-components';
import ico from '../../../assets/img/Mobile/plus.svg';
import { FontStyle } from '../../../assets/style/style';
import { BrowserRouter as Router, Link} from 'react-router-dom';

const Container = styled.div`
    width: 152px;
    height: 41px;
    margin-top: 17px;
    margin-right: -100px;
`
const Box = styled.button`
    width: 152px;
    height: 41px;
    background-color: #4DB6AC;
    border-radius: 22px;
    display: flex;
    border: none;
    position: relative;
    outline: none;
    cursor: pointer;
`
const Ico = styled.div`
    width: 15px;
    height: 15px;
    background-image: url(${ico});
    background-repeat: no-repeat;
    background-size: 15px 15px;
    position: absolute;
    top: 12px;
    left: 15px;
`
const Text = styled.p`
    font-family: ${FontStyle.family};
    font-size: 1.9em;
    color: #fff; 
    text-decoration: none;
    position: absolute;
    top: -15px;
    right: 17px;
    font-weight: 600;
`

const AddNotice = () => {
    return (
        <Container>
            <Link to='/createAnnouncement'><Box><Ico></Ico><Text>Ogłoszenie</Text></Box></Link>
        </Container>
    )
}

export default AddNotice;