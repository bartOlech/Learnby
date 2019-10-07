import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import ListTemplate from './ListTemplate';


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Text = styled.h2`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.8em;    
    text-align: center;
    font-weight: 600;
`

const CompanyBox = () => {
    return (
        <Container>
            <Text>Company</Text>
            <ListTemplate key={1} link='/career' text='Kariera'></ListTemplate>
            <ListTemplate key={2} link='/about' text='O nas'></ListTemplate>
            <ListTemplate key={3} link='/media' text='Dla mediów'></ListTemplate>
            <ListTemplate key={4} link='/policy' text='Polityka prywatności'></ListTemplate>
            <ListTemplate key={5} link='/regulations' text='Regulamin'></ListTemplate>
            <Text style={{marginTop: '40px 0 20px 0',}}>Kontakt</Text>
        </Container>
    )
}

export default CompanyBox;