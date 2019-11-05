import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style'; 
import shareIco from '../../../../assets/img/Mobile/share.svg';

const Container = styled.div`
   
`
const Button = styled.div`
    width: 170px;
    height: 37px;
    border-radius: 11px;
    background-color: #EBF8FB;
    box-shadow: 1px 1px 1px #C8CEEA;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.2em;
    margin-top: -5px;
`
const Ico = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${shareIco});
    background-repeat: no-repeat;
    background-size: 30px 30px;
`

const ShareButton = () => {
    return (
        <Container>
            <Button><Text>Udostępnij</Text><Ico></Ico></Button>
        </Container>
    )
}

export default ShareButton;