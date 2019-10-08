import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: flex-end;
`
const Text = styled.p`
    font-family: ${FontStyle.family};
    color: #4DB6AC;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
`

const handleButton = () => {
    console.log('forgot password')
}

const ForgotPassword = () => {
    return (
        <Container>
            <Text onClick={handleButton}>Zapomniałeś hasła?</Text>
        </Container>
    )
}

export default ForgotPassword;