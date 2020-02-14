import React from 'react';
import styled from 'styled-components';
import Logo from '../../Header/Logo';
import ProgressBar from './ProgressBar';
import FormLayout1 from './FormLayout/FormLayout1/FormLayout1';
import FormLayout2 from './FormLayout/FormLayout2/FormLayout2';
import FormLayout3 from './FormLayout/FormLayout3/FormLayout3';
import FormLayout4 from './FormLayout/FormLayout4/FormLayout4';
import { FindAnnouncementConsumer } from '../../../context/CurrentUser.context';
import LearnImage from '../../../assets/img/Desktop/create-ad-image.png'
import { FontStyle } from '../../../assets/style/style';

const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    @media(min-width: 1200px) {
        width: 50%
    }
`
const ImageBox = styled.div`
    width: 50%;
    height: 100%;
    display: none;
    position: relative;
    @media(min-width: 1200px) {
        display: flex;
        flex-direction: column;
    }
`
const Image = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${LearnImage});
    background-repeat: no-repeat;
    background-size: cover;
`
const ImageColor = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background: #3AAF9F;
    opacity: .8;
`
const Text = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 30%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MainText = styled.h2`
    font-family: ${FontStyle.family};
    color: #fff;
    font-size: 2.4em;
    text-align: center;
`
const BottomText = styled.p`
    width: 80%;
    font-family: ${FontStyle.family};
    color: #fff;
    font-size: 2em;
    text-align: center;
    font-weight: 600;
    margin-top: -5px;
`

const CreateAnnouncementSection = () => {
    return (
        <FindAnnouncementConsumer>
            {({ addAnnouncementLayoutNumeber }) => (
                <Main>
                    <Container>
                    <Logo></Logo>
                    <ProgressBar layoutNumber={addAnnouncementLayoutNumeber}></ProgressBar>
                    {addAnnouncementLayoutNumeber === 0 ? <FormLayout1></FormLayout1> : null}
                    {addAnnouncementLayoutNumeber === 1 ? <FormLayout2></FormLayout2> : null}
                    {addAnnouncementLayoutNumeber === 2 ? <FormLayout3></FormLayout3> : null}
                    {addAnnouncementLayoutNumeber === 3 ? <FormLayout4></FormLayout4> : null}
                    </Container>
                    <ImageBox>
                        <Image></Image>
                        <Text>
                            <MainText>
                                Dodaj ogłoszenie i ucz się wspólnie!
                            </MainText>
                            <BottomText>
                                Co 2 godziny ktoś znajduję partnera do nauki
                            </BottomText>
                        </Text>
                        <ImageColor></ImageColor>
                    </ImageBox>
                </Main>
            )}
        </FindAnnouncementConsumer>
    )
}

export default CreateAnnouncementSection;