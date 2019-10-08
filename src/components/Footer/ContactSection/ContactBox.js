import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';

import facebookIco from '../../../assets/img/Mobile/facebook.svg';
import LinkedInIco from '../../../assets/img/Mobile/linkedin-logo.svg';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -5px;
`
const Social = styled.div`
    display: flex;
    margin-bottom: 30px;
    margin-left: -10px;
`
const Ico = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${props => props.ico});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 10px;
`
const TextBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${props => props.color};
`

const ContactBox = () => {
    return (
        <Container>
            <Social>
                <Ico ico={facebookIco}></Ico>
                <Ico ico={LinkedInIco}></Ico>
            </Social>
            <TextBox>
                <Text 
                    style={{paddingRight: '5px', marginLeft: '70px'}} 
                    color={FontStyle.color}>Email:
                </Text>
                <Text 
                    color='#19645C'>example@gmail.com
                </Text>
            </TextBox>
            <TextBox>
                <Text 
                    style={{paddingRight: '5px', marginLeft: '33px'}} 
                    color={FontStyle.color}>Infolinia:
                </Text>
                <Text 
                    color='#19645C'>777 777 777
                </Text>
            </TextBox>
        </Container>
    )
}

export default ContactBox;