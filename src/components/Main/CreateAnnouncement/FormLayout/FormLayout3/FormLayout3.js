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
    border: 1px solid #C6C6C6;
    border-radius: 3px;
    font-family: ${FontStyle.family};
    font-size: 1.4em;
    margin-bottom: 15px;
    outline: none;
    padding-left: 10px;
`
const CheckRegulationsSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 30px;
`
const CheckboxBox = styled.div`
    margin: 17px 10px 0 10px;
`


const FormLayout3 = () => {
    const[regulationsIsCheck, setRegulationsIsCheck] = useState(false)

    const handleCheckboxRegulations = (val) => {
        setRegulationsIsCheck(val)
    }

    return (
        <FindAnnouncementConsumer>
            {({ addAnnouncementData, setAnnouncementData }) => (
                <Container>
                    <Form>
                        <Label style={{fontSize: '1.7em', marginBottom: '25px'}}>Już prawie skończone!</Label>
                        <Label style={{marginLeft: '-255px'}} htmlFor='description'>Opis</Label>
                        <Textarea 
                            value={addAnnouncementData.description} 
                            onChange={val => setAnnouncementData('description', val.target.value)} 
                            placeholder='Krótki opis odnośnie twoich oczekiwań w stosunku do partnera oraz nauki' 
                            name='description'  
                            id='description'></Textarea>
                        <CheckRegulationsSection>
                            <CheckboxBox>
                                {/* TUTAJ WALIDACJA!!! */}
                                <Checkbox 
                                    tickAnimationDuration='200' 
                                    checked={regulationsIsCheck} 
                                    onChange={handleCheckboxRegulations} 
                                    size='3' 
                                    color='red' 
                                    id='regulations'></Checkbox>
                            </CheckboxBox>
                            <Label style={{fontSize: '1.2em', paddingRight: '10px'}} htmlFor='regulations'>
                                Proces zamówienia jest obsługiwany przez naszego dystrybutora i sprzedawcę Paddle.com, który rozpatruje także wszelkie zapytania klientów oraz zwroty.
                            </Label>
                        
                        </CheckRegulationsSection>
                    </Form>
                    <FooterButtonsBox></FooterButtonsBox>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default FormLayout3