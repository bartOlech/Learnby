import React from 'react';
import styled from 'styled-components';
import DeformedCircleIco from '../../../assets/img/Mobile/deformed-circle-mobile.svg';
import { FontStyle } from '../../../assets/style/style';

const Container = styled.div`
    margin-top: 45px;
    position: relative;
    width: 100%;
    height: 100%;
`
const VerticalLine = styled.div`
    width: 2px;
    height: 490px;
    background-color: ${FontStyle.color};
    position: absolute;
    left: 40px;
    border-radius: 20px;
`
const HorizontalLine = styled.div`
    width: 60px;
    height: 2px;
    background-color: ${FontStyle.color};
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: -1;
    border-radius: 20px;
`
const Step = styled.div`
    width: 100px;
    height: 100px;
    background-image: url(${DeformedCircleIco});
    background-repeat: no-repeat;
    background-size: 80px 80px;
    position: absolute;
    left: 10px;
    top: 10px;
    &&:nth-child(5){
        &&:before{
            content: '2';
        }
    }
    &&:nth-child(8){
        &&:before{
            content: '3';
        }
    }
    &&:nth-child(11){
        &&:before{
            content: '4';
        }
    }
    &&:before {
        content: '1';
        color: #fff;
        font-family: ${FontStyle.family};
        font-size: 1.8em;
        position: absolute;
        top: 24px;
        left: 25px;
    }
    
`
const StepText = styled.h2`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-weight: 300;
    position: absolute;
    left: 130px;
    top: 16px;
`

const StepsStructure = () => {
    return (
        <Container>
            <VerticalLine></VerticalLine>
            {/* steps 1 */}
            <Step></Step>
            <HorizontalLine></HorizontalLine>
            <StepText>Załóż konto</StepText>
            {/* steps 2 */}
            <Step style={{top: '140px'}}></Step>
            <HorizontalLine style={{top: '180px'}}></HorizontalLine>
            <StepText style={{top: '147px'}}>Napisz czego się uczysz</StepText>
            {/* steps 3 */}
            <Step style={{top: '270px'}}></Step>
            <HorizontalLine style={{top: '310px'}}></HorizontalLine>
            <StepText style={{top: '277px'}}>Znajdź odpowiadające osoby</StepText>
            {/* steps 4 */}
            <Step style={{top: '400px'}}></Step>
            <HorizontalLine style={{top: '440px'}}></HorizontalLine>
            <StepText style={{top: '407px'}}>Ucz się z innymi zdalnie lub na spotkaniach</StepText>
        </Container>
    )
}

export default StepsStructure;