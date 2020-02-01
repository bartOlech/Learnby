import React from 'react';
import styled from 'styled-components';
import Number from './Number';
import TextTemplate from './TextTemplate';
import Line from './Line';
import ExtraTextTemplate from './ExtraTextTemplate';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 300px;
    margin-top: -25px;
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
`

const Template = () => {
    return (
        <Container>
            <Box>
                <Number marginLeft='-15px' number='1'></Number>
                <TextTemplate Text='Załóż konto'></TextTemplate>
                <Line></Line>
                <ExtraTextTemplate ExtraText='Zaloguj lub zarejestruj się na naszej platformie by korzystać ze wszystkich funkcji'></ExtraTextTemplate>
            </Box>
            <Box>
                <Number marginLeft='-2px' number='2'></Number>
                <TextTemplate Text='Napisz czego się uczysz'></TextTemplate>
                <Line></Line>
                <ExtraTextTemplate ExtraText='Wypełnij formularz formularz, w którym wybierzesz elementy do nauki'></ExtraTextTemplate>
            </Box>
            <Box>
                <Number marginLeft='-2px' number='3'></Number>
                <TextTemplate Text='Znajdź osoby'></TextTemplate>
                <Line></Line>
                <ExtraTextTemplate ExtraText='Nasze algorytmy dobiorą najbardziej odpowiadające do ciebie i twoich upodobań osoby'></ExtraTextTemplate>
            </Box>
            <Box>
                <Number marginLeft='-2px' number='4'></Number>
                <TextTemplate Text='Ucz się wspólnie'></TextTemplate>
                <Line></Line>
                <ExtraTextTemplate ExtraText='Rozpocznij naukę w parze, lub gronie osób zdalnie lub na umówionych spotkaniach'></ExtraTextTemplate>
            </Box>
        </Container>
    )
}

export default Template;