import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import wavySquareIco from '../../../../../assets/img/Desktop/Chat/message-wavy-box.svg';
import firebase from '../../../../../Firebase.config';

const Container = styled.div`
    width: 80px;
    height: 75px;
    background-image: url(${wavySquareIco});
    background-repeat: no-repeat;
    background-size: 75px 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`
const NameLetterSquare = styled.div`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 2em;
    background-color: #3AAF9F;
    margin-right: 6px;
`

const LetterLogo = () => {
    const[letterOfName, setLetterOfName] = useState('')

    useEffect(() => {
        firebase.isInitialized().then(() => {
            setLetterOfName(firebase.getCurrentUserAllData().displayName.split('').splice(0, 1).join('').toUpperCase())
        })
    }, [])
    return (
        <Container>
            <NameLetterSquare>{letterOfName}</NameLetterSquare>
        </Container>
    )
}

export default LetterLogo;