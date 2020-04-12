import React from 'react';
import styled from 'styled-components';
import ReturnButton from './ReturnButton';
import ForwardButton from './ForwardButton';

const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 35px;
    @media(min-width: 1200px) {
        width: 55%;
    }
    @media(min-width: 1000px) {
        position: absolute;
        bottom: 0;
        margin-top: 0;
    }
`

const FooterButtomsBox = (props) => {

    const callbackValidationLayout0 = (cityValidation, subjectValidation) => {
        props.callbackValidationLayout0(cityValidation, subjectValidation)
    }
    const callbackValidationLayout1 = (name, surname, age, sex) => {
        props.callbackValidationLayout1(name, surname, age, sex)
    }
    const callbackValidationLayout2= (cityValidation, subjectValidation) => {
        props.callbackValidationLayout2(cityValidation, subjectValidation)
    }

    return (
        <Container>
            <ReturnButton></ReturnButton>
            <ForwardButton 
                callbackValidationLayout0={callbackValidationLayout0}
                callbackValidationLayout1={callbackValidationLayout1}
                callbackValidationLayout2={callbackValidationLayout2}
            ></ForwardButton>
        </Container>
    )
}

export default FooterButtomsBox;