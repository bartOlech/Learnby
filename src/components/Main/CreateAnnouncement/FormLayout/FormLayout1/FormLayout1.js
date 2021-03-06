import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import ProgressCircles from './ProgressCircles';
import FooterButtonsBox from '../FooterButtons/FooterButtonsBox';
import { FindAnnouncementConsumer } from '../../../../../context/CurrentUser.context';
import Checkbox from 'react-simple-checkbox';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 30px;
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
    margin-bottom: 20px;
`
const Input = styled.input`
    width: 290px;
    height: 43px;
    border: ${props => props.border};
    border-radius: 3px;
    font-family: ${FontStyle.family};
    font-size: 1.23em;
    margin-bottom: 50px;
    outline: none;
    padding-left: 10px;
`
const CheckIfRemote = styled.div`
    width: 100%;
    height: 120%;
    display: flex;
    margin-top: -50px;
    cursor: pointer;
`
const CheckboxBox = styled.div`
    margin: 17px 10px 0 -17px;
`


const FormLayout1 = () => {
    const[isRemote, setIsRemote] = useState(false)
    const[cityIsValidate, setCityIsValidate] = useState(true)
    const[subjectIsValidate, setSubjectIsValidate] = useState(true)

    const callbackValidationLayout0 = (cityValidation, subjectValidation) => {
        setCityIsValidate(cityValidation)
        setSubjectIsValidate(subjectValidation)
    }

    return (
        <FindAnnouncementConsumer>
            {({ addAnnouncementData, setAnnouncementData }) => (
                <Container>
                    <Form>
                        <Label style={{marginLeft: '-67px'}} htmlFor='subject'>Czego chcesz się uczyć?</Label>
                        <Input 
                            data-testid='form-layout1-subject'
                            onChange={val =>{
                                setAnnouncementData('subject', val.target.value)
                            }} 
                            border={subjectIsValidate ? '1px solid #C6C6C6' : '1px solid #CC1946;'}
                            value={addAnnouncementData.subject} te
                            name='subject' 
                            id='subject' 
                            type='text' 
                            placeholder='np. Język Angielski'>

                        </Input>

                        <Label>Dopasuj poziom swojej wiedzy</Label>
                        <ProgressCircles></ProgressCircles>
                        <Label style={{marginLeft: '-175px'}} htmlFor='city'>Miejscowość</Label>
                        <Input 
                            value={addAnnouncementData.city} 
                            onChange={val => {
                                setAnnouncementData('city', val.target.value)
                            }} 
                            border={cityIsValidate ? '1px solid #C6C6C6' : '1px solid #CC1946;'}
                            name='city' 
                            id='city' 
                            type='text'>

                        </Input>
                        <div>
                            <CheckIfRemote>
                                <CheckboxBox>
                                    <Checkbox 
                                        tickAnimationDuration='200' 
                                        checked={isRemote} 
                                        onChange={(val) => {
                                            setIsRemote(val)
                                            setAnnouncementData('remote', val);
                                        }} 
                                        size='3' 
                                        color='#262F3F' 
                                        id='isRemote'></Checkbox>
                                </CheckboxBox>
                                <Label htmlFor='isRemote'>Wyłącznie kontakt zdalny</Label>
                            </CheckIfRemote>
                        </div>
                    </Form>
                    <FooterButtonsBox callbackValidationLayout0={callbackValidationLayout0}></FooterButtonsBox>
            </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default FormLayout1