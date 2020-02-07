import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import ListTemplate from './ListTemplate';


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -5px;
`
const Text = styled.h2`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.8em;    
    text-align: center;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 0;
`

const CompanyBox = () => {
    return (
        <Container>
            <Text>Company</Text>
            <ListTemplate link='/career' text='Kariera'></ListTemplate>
            <ListTemplate link='/about' text='O nas'></ListTemplate>
            <ListTemplate link='/media' text='Dla mediów'></ListTemplate>
            <ListTemplate link='/policy' text='Polityka prywatności'></ListTemplate>
            <ListTemplate link='/regulations' text='Regulamin'></ListTemplate>  
        </Container>
    )
}

export default CompanyBox;