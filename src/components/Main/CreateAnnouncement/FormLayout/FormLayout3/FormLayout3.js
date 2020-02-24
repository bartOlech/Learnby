import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import FooterButtonsBox from '../FooterButtons/FooterButtonsBox';
import Checkbox from 'react-simple-checkbox';
import { FindAnnouncementConsumer } from '../../../../../context/CurrentUser.context';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Label = styled.label`
    font-family: ${FontStyle.family};
    font-size: 1.5em;
    color: ${FontStyle.color};
    margin-top: 20px;
    margin-bottom: 7px;
`
const Textarea = styled.textarea`
    width: 290px;
    height: 180px;
    border: ${props => props.border};
    border-radius: 3px;
    font-family: ${FontStyle.family};
    font-size: 1.4em;
    margin-bottom: 15px;
    outline: none;
    padding-left: 10px;
    @media(min-width: 1000px) {
        width: 600px;
        height: 230px;
    }
`
const CheckRegulationsSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 30px;
`
const CheckboxBox = styled.div`
    margin: 17px 10px 0 10px;
    && :before {
        content: '';
        display: ${props => props.display};
        top: 0;
        left: 0;
        width: 17px;
        height: 17px;
        position: absolute;
        border: 3px solid #CC1946;
        z-index: 2;
        border-radius: 4px;
    }
    border: ${props => props.border};
`


const FormLayout3 = () => {
    const[regulationsIsCheck, setRegulationsIsCheck] = useState(false)
    const[regulationsIsValidate, setRegulationsIsValidate] = useState(true)
    const[descriptionIsValidate, setDescriptionIsValidate] = useState(true)

    const callbackValidationLayout2 = (regulations, description) => {
        setDescriptionIsValidate(description)
        setRegulationsIsValidate(regulations)
    }

    return (
        <FindAnnouncementConsumer>
            {({ addAnnouncementData, setAnnouncementData }) => (
                <Container>
                    <Form>
                        <Label style={{fontSize: '1.7em', marginBottom: '25px'}}>Już prawie skończone!</Label>
                        <Label htmlFor='description'>Opis</Label>
                        <Textarea 
                            value={addAnnouncementData.description} 
                            onChange={val => {
                                setAnnouncementData('description', val.target.value)
                            }} 
                            border={descriptionIsValidate ? '1px solid #C6C6C6' : '1px solid #CC1946;'}
                            placeholder='Krótki opis odnośnie twoich oczekiwań w stosunku do partnera oraz nauki' 
                            name='description'  
                            id='description'></Textarea>
                        <CheckRegulationsSection>
                            <CheckboxBox display={regulationsIsValidate ? 'none' : 'inline'}>
                                <Checkbox 
                                    tickAnimationDuration='200' 
                                    checked={regulationsIsCheck} 
                                    onChange={(val) => {
                                        setRegulationsIsCheck(val)
                                        setAnnouncementData('regulations', val)
                                    }} 
                                    size='3' 
                                    color='#262F3F'
                                    id='regulations'></Checkbox>
                            </CheckboxBox>
                            <Label style={{fontSize: '1.2em', paddingRight: '10px'}} htmlFor='regulations'>
                                Proces zamówienia jest obsługiwany przez naszego dystrybutora i sprzedawcę Paddle.com, który rozpatruje także wszelkie zapytania klientów oraz zwroty.
                            </Label>
                        
                        </CheckRegulationsSection>
                    </Form>
                    <FooterButtonsBox callbackValidationLayout2={callbackValidationLayout2}></FooterButtonsBox>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default FormLayout3