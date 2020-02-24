import React from 'react';
import styled from 'styled-components';
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton, LinkedinShareButton, LinkedinIcon } from 'react-share'

const Container = styled.div`
    position: absolute;
   display: flex;
   margin-left: -39px;
   left: 40px;
   @media(min-width: 1000px) {
       margin-top: 85px;
       top: 150px;;
       left: 65px;
   }
`
const ButtonBox = styled.div`
    margin-left: 20px;
    cursor: pointer;
`
const ShareButton = () => {
    return (
        <Container>
            <ButtonBox>
                <FacebookShareButton
                    quote='Learnby - Ucz się wspólnie'
                    url={String(window.location.href)}
                >
                    <FacebookIcon
                        size='2.4rem'
                        borderRadius='50%'
                    />
                </FacebookShareButton>
            </ButtonBox>
            <ButtonBox>
                <TwitterShareButton
                    quote='Learnby - Ucz się wspólnie'
                    url={String(window.location.href)}
                >
                    <TwitterIcon
                        size='2.4rem'
                        borderRadius='50%'
                    />
                </TwitterShareButton>
            </ButtonBox>
            <ButtonBox>
                <LinkedinShareButton
                    quote='Learnby - Ucz się wspólnie'
                    url={String(window.location.href)}
                >
                    <LinkedinIcon
                        size='2.4rem'
                        borderRadius='50%'
                    />
                </LinkedinShareButton>
            </ButtonBox>
        </Container>
    )
}

export default ShareButton;