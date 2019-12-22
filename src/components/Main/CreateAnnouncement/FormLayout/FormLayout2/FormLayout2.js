import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import FooterButtonsBox from '../FooterButtons/FooterButtonsBox';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
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
const Input = styled.input`
    width: 290px;
    height: 43px;
    border: ${props => props.border};
    border-radius: 3px;
    font-family: ${FontStyle.family};
    font-size: 1.23em;
    margin-bottom: 15px;
    outline: none;
    padding-left: 10px;
`
const AgeInput = styled.input`
    width: 290px;
    height: 43px;
    border: 1px solid #C6C6C6;
    border-radius: 3px;
    font-family: ${FontStyle.family};
    font-size: 1.23em;
    outline: none;
`

const FormLayout2 = () => {
    const[nameIsValidate, setNameIsValidate] = useState(true)
    const[surnameIsValidate, setSurnameIsValidate] = useState(true)
    const[ageIsValidate, setAgeIsValidate] = useState(true)
    const[sexIsValidate, setSexIsValidate] = useState(true)

    const callbackValidationLayout1 = (name, surname, age, sex) => {
        setNameIsValidate(name)
        setSurnameIsValidate(surname)
        setAgeIsValidate(age)
        setSexIsValidate(sex)
    }

    return (
        <FindAnnouncementConsumer>
            {({ addAnnouncementData, setAnnouncementData }) => (
                <Container>
                    <Form>
                        <Label style={{marginLeft: '-256px'}} htmlFor='name'>Imię</Label>
                        <Input 
                            value={addAnnouncementData.name} 
                            onChange={val => {
                                setAnnouncementData('name', val.target.value)
                            }} 
                            border={nameIsValidate ? '1px solid #C6C6C6' : '1px solid #CC1946;'}
                            name='fname'  
                            id='name' 
                            type='text'>

                        </Input>
                        <Label style={{marginLeft: '-204px'}} htmlFor='surname'>Nazwisko</Label>
                        <Input 
                            value={addAnnouncementData.surname} 
                            onChange={val => {
                                setAnnouncementData('surname', val.target.value)
                            }} 
                            border={surnameIsValidate ? '1px solid #C6C6C6' : '1px solid #CC1946;'}
                            name='surname' 
                            id='surname' 
                            type='text'>

                        </Input>
                        <Label style={{marginLeft: '-237px'}} htmlFor='age'>Wiek</Label>
                        <AgeInput 
                            value={addAnnouncementData.age} 
                            onChange={val => {
                                setAnnouncementData('age', val.target.value)
                            }} 
                            border={ageIsValidate ? '1px solid #C6C6C6' : '1px solid #CC1946;'}
                            name='age' 
                            id='age' 
                            type="number" 
                            min="1" 
                            max="100">

                        </AgeInput>

                        <Label style={{marginLeft: '-254px', marginTop: '35px'}} htmlFor='age'>Płeć</Label>
                        <RadioGroup onChange={val => {
                            // checkSexValidation(val)
                            setAnnouncementData('sex', val)
                        }} horizontal>
                            <RadioButton pointColor='#070E1A' rootColor={sexIsValidate ? '#797979' : '#CC1946'} value="M">
                                M
                            </RadioButton>
                            <RadioButton pointColor='#070E1A' rootColor={sexIsValidate ? '#797979' : '#CC1946'} value="K">
                                K
                            </RadioButton>
                        </RadioGroup>
                    </Form>
                    <FooterButtonsBox callbackValidationLayout1={callbackValidationLayout1}></FooterButtonsBox>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default FormLayout2