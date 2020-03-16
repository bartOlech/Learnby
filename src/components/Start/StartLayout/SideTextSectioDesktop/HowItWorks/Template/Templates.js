import React from 'react';
import styled from 'styled-components';
import Number from './Number';
import TextTemplate from './TextTemplate';
import Line from './Line';
import ExtraTextTemplate from './ExtraTextTemplate';
import Arrow from './Arrow';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 300px;
    margin-top: -25px;
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 1000px) {
        flex-direction: row;     
    }
`

const Template = () => {
    return (
        <Container>
            <Box>
                <Number display='none' marginLeft='-15px' number='1'></Number>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <TextTemplate Text='Załóż konto'></TextTemplate>
                    <Line></Line>
                    <ExtraTextTemplate ExtraText='Zaloguj lub zarejestruj się na naszej platformie by korzystać ze wszystkich funkcji'></ExtraTextTemplate>
                </div>
            </Box>
            <Arrow></Arrow>
            <Box>
                <Number display='none' marginLeft='-2px' number='2'></Number>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <TextTemplate Text='Napisz czego się uczysz'></TextTemplate>
                    <Line></Line>
                    <ExtraTextTemplate ExtraText='Wypełnij formularz formularz, w którym wybierzesz elementy do nauki'></ExtraTextTemplate>
                </div>
            </Box>
            <Arrow></Arrow>
            <Box>
                <Number display='none' marginLeft='-2px' number='3'></Number>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <TextTemplate Text='Ucz się wspólnie'></TextTemplate>
                    <Line></Line>
                    <ExtraTextTemplate ExtraText='Rozpocznij naukę w parze, lub gronie osób zdalnie lub na umówionych spotkaniach'></ExtraTextTemplate>
                </div>
            </Box>
        </Container>
    )
}

export default Template;