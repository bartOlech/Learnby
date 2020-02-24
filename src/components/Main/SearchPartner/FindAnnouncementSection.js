import React, { useState } from 'react';
import styled from 'styled-components';
import MagnifierIco from '../../../assets/img/Mobile/magnifying-glass.svg';
import { FontStyle } from '../../../assets/style/style';
import { FindAnnouncementConsumer } from '../../../context/CurrentUser.context';
import firebase from '../../../Firebase.config';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: ${props => props.display};
    justify-content: center;
    position: relative;
`
const Box = styled.div`
    width: 310px;
    height: 45px;
    position: relative;
    margin-right: 20px;
    @media (min-width: 1000px) {
        width: 510px;

    }
`
const InputText = styled.input`
    width: 300px;
    height: 45px;
    border: none;
    border-radius: 40px;
    box-shadow: 1px 1px 2px #D5D9DF;
    outline: none;
    font-family: ${FontStyle.family};
    font-size: 1.3em;
    padding-left: 20px;
    &&::placeholder {
        font-size: .9em;
    }
    @media (min-width: 1000px) {
        width: 510px;
        box-shadow: none;
    }
`
const Ico = styled.div`
    right: 0;
    top: 8px;
    width: 30px;
    height: 30px;
    background-image: url(${MagnifierIco});
    background-repeat: no-repeat;
    background-size: 30px 30px;
    position: absolute;
`

const FindUserSection = (props) => {
    const[searchedPhrase, setSearchedPhrase] = useState('')
        
    return (
        <Container display={props.display}>
                <FindAnnouncementConsumer>
                    {({ searchKeyword }) => (
                        <Box>
                            <InputText 
                            onChange={(e) => {
                                setSearchedPhrase(e.target.value)
                                searchKeyword(e.currentTarget.value)
                            }}
                            value={searchedPhrase}
                            type='text' 
                            placeholder='Czego obecnie się uczysz?'>   
                            </InputText>
                            <Ico></Ico>
                        </Box>
                    )}
                </FindAnnouncementConsumer>
        </Container>
    )
}

export default FindUserSection;