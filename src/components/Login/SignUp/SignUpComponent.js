import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { FontStyle } from '../../../assets/style/style';
import GoogleBtn from '../SignIn/Social/Google';
import FacebookBtn from '../SignIn/Social/Facebook';
import Form from './Form';
import Media from 'react-media';
import SwitchLoginButton from './DesktopLayout/SwitchLoginButton';
// shapes
import Circle from '../SignIn/Background-shapes/Circle';
import Triangle from '../SignIn/Background-shapes/Triangle';
import SmallTriangle from '../SignIn/Background-shapes/Small-triangle';
import Square from '../SignIn/Background-shapes/Square';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 0;
    @media(min-width: 1200px) {
        width: 50%;
        margin-top: 20px;
    }
`
const MainText = styled.h2`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    text-align: center;
    font-size: 2em;
    margin-bottom: 40px;
    font-weight: 600;
`
const SocialIco = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    @media (min-width: 1000px) {
        margin-top: 0;
    }
`
// desktop styled
const Main = styled.div`
    display: flex;
`
const SideColorBox = styled.div`
    width: 50%;
    height: 100vh;
    position: relative;
`
const SideColor = styled.div`
    width: 100%;
    height: 100%;
    background-color: #3AAF9F;
    /* position: absolute; */
`
const SideColorContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const SideText = styled.div`
    font-size: 2.9em;
    font-family: ${FontStyle.family};
    color: #fff;
    font-weight: 600;
    margin-top: 200px;
`

const SignUpComponent = () => {
    return (
        <div>
            {/* Phone */}
            <Media query="(max-width: 1200px)" render={() =>
                (
                    <Container> 
                        <Header></Header>
                        <SocialIco>
                            <FacebookBtn></FacebookBtn>
                            <GoogleBtn></GoogleBtn>
                        </SocialIco>
                        <Form></Form>
                    </Container>
                )}
            />
            {/* Desktop */}
            <Media query="(min-width: 1200px)" render={() =>
                (
                    <Main>
                        <Container> 
                            <MainText>Zarejestruj się</MainText>
                            <SocialIco>
                                <FacebookBtn></FacebookBtn>
                                <GoogleBtn></GoogleBtn>
                            </SocialIco>
                            <Form></Form>
                        </Container>  
                        <SideColorBox>
                            <SideColorContent>
                                {/* shapes on the background */}
                                <Circle top='20%' left='10%'></Circle>
                                <Circle top='90%' left='21%'></Circle>
                                <Circle top='39%' left='71%'></Circle>
                                <SmallTriangle top='9%' left='23%' rotate='rotate(20deg)'></SmallTriangle>
                                <SmallTriangle top='2%' left='90%' rotate='rotate(43deg)'></SmallTriangle>
                                <SmallTriangle top='81%' left='53%' rotate='rotate(6deg)'></SmallTriangle>
                                <SmallTriangle top='64%' left='13%' rotate='rotate(80deg)'></SmallTriangle>
                                <Square top='29%' left='69%' rotate='rotate(24deg)'></Square>
                                <Square top='1%' left='59%' rotate='rotate(24deg)'></Square>
                                <Triangle></Triangle>
                                <SideText style={{marginBottom: '-160px'}}>Posiadasz konto w Learnby?</SideText><br></br>
                                <SideText>Witamy ponownie!</SideText>
                                <SwitchLoginButton></SwitchLoginButton>
                            </SideColorContent>
                            <SideColor>

                            </SideColor>
                        </SideColorBox>
                    </Main>                  
                )}
            />
        </div>
    )
}

export default SignUpComponent;