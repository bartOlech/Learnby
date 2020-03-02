import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { FindAnnouncementConsumer } from '../../../../../context/CurrentUser.context';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`
const Text = styled.h1`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: ${props => props.size};
    text-align: center;
`
const Button = styled.button`
    width: 233px;
    height: 54px;
    background-color: ${FontStyle.color};
    font-family: ${FontStyle.family};
    font-size: 1.5em;
    border: none;
    border-radius: 5px;
    outline: none;
    color: #fff;
    text-align: center;
    cursor: pointer;
`

const FormLayout4 = () => {

    return (
        <FindAnnouncementConsumer>
            {({ clearAnnouncementData, getAnnouncementById, currentCreatedAnnouncementId }) => (
                <Container>
                    <Text style={{marginTop: '70px'}} size='2em'>Ogłoszenie czeka na weryfikacje</Text>
                    <Text size='1.2em'>Powinno pojawić się w ciągu 30min</Text>
                            <Button style={{marginTop: '50px'}}>Podgląd</Button>
                    <Link to='/findPartner'><Button onClick={clearAnnouncementData} style={{marginTop: '30px'}}>Zakończ</Button></Link>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default FormLayout4