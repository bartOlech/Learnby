import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { FontStyle } from '../../../assets/style/style';
import GoogleBtn from './Social/Google';
import FacebookBtn from './Social/Facebook';
import Form from './Form';
import Media from 'react-media';
import SwitchLoginButton from './DesktopLayout/SwitchLoginButton';
// shapes
import Circle from './Background-shapes/Circle';
import Triangle from './Background-shapes/Triangle';
import SmallTriangle from './Background-shapes/Small-triangle';
import Square from './Background-shapes/Square';

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
    margin-top: 175px;
`
const BottomText = styled.span`
    font-size: 2.2em;
    color: #fff;
    font-family: ${FontStyle.family};
    margin-top: 30px;
    margin-bottom: 30px;
    font-weight: 300;
`

const SignInComponent = () => {
    return (
        <div>
            {/* Phone */}
            <Media query="(max-width: 1200px)" render={() =>
                (
                    <Container> 
                        <Header></Header>
                        <MainText>Zaloguj się</MainText>
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
                            <MainText>Zaloguj się</MainText>
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
                                <SmallTriangle top='2%' left='80%' rotate='rotate(43deg)'></SmallTriangle>
                                <SmallTriangle top='81%' left='53%' rotate='rotate(6deg)'></SmallTriangle>
                                <SmallTriangle top='64%' left='13%' rotate='rotate(80deg)'></SmallTriangle>
                                <Square top='29%' left='69%' rotate='rotate(24deg)'></Square>
                                <Square top='1%' left='59%' rotate='rotate(24deg)'></Square>
                                <Triangle></Triangle>
                                <SideText style={{marginBottom: '-160px'}}>Nie posiadasz Konta?</SideText><br></br>
                                <SideText>Załóż je teraz!</SideText>
                                <BottomText>To nic nie kosztuje</BottomText>
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

export default SignInComponent;