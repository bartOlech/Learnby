import React, { useState } from 'react';
import styled from 'styled-components';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { FontStyle } from '../../../../assets/style/style';
import Button from './Button';

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
    margin-left: -8px;
`
const Textarea = styled.textarea`
    width: 290px;
    height: 180px;
    border: ${props => props.border};
    border-radius: 3px;
    font-family: ${FontStyle.family};
    font-size: 1.4em;
    outline: none;
    padding-left: 10px;
`

const AppendForm = () => {
    const[nameIsValidate, setNameIsValidate] = useState(true)
    const[descriptionIsValidate, setDescriptionIsValidate] = useState(true)
    const[sexIsValidate, setSexIsValidate] = useState(true)

    const[nameVal, setNameVal] = useState('')
    const[descriptionVal, setDescriptionVal] = useState('')
    const[ageVal, setAgeVal] = useState(0)
    const[sexVal, setSexVal] = useState('')

    const callbackValidation = () => {
        nameVal === '' ? setNameIsValidate(false) : setNameIsValidate(true)
        descriptionVal === '' ? setDescriptionIsValidate(false) : setDescriptionIsValidate(true)
        sexVal === '' ? setSexIsValidate(false) : setSexIsValidate(true)
    }

    const nameHandle = (e) => {
        setNameVal(e.target.value)
    }
    const descriptionHandle = (e) => {
        setDescriptionVal(e.target.value)
    }
    const ageHandle = (e) => {
        setAgeVal(e.target.value)
    }
    const sexHandle = (val) => {
        setSexVal(val)
    }

    return (
        <Container>
                    <Form>
                        <Label style={{marginLeft: '-256px'}} htmlFor='name'>Imię</Label>
                        <Input 
                            value={nameVal} 
                            onChange={nameHandle}
                            border={nameIsValidate ? '1px solid #C6C6C6' : '1px solid #CC1946;'}
                            name='name'  
                            id='name' 
                            type='text'>

                        </Input>
                        <Label style={{marginLeft: '-237px'}} htmlFor='age'>Wiek</Label>
                        <AgeInput 
                            value={ageVal} 
                            onChange={ageHandle}
                            name='age' 
                            id='age' 
                            type="number" 
                            min="1" 
                            max="100">

                        </AgeInput>
                        <Label style={{marginLeft: '-15px', marginTop: '35px'}} htmlFor='description'>Opisz siebie w kilku słowach</Label>
                        <Textarea 
                            value={descriptionVal} 
                            onChange={descriptionHandle}
                            border={descriptionIsValidate ? '1px solid #C6C6C6' : '1px solid #CC1946;'}
                            name='description'  
                            id='description'>
                        </Textarea>

                        <Label style={{marginLeft: '-254px', marginTop: '35px'}} htmlFor='age'>Płeć</Label>
                        <RadioGroup onChange={sexHandle} horizontal>
                            <RadioButton pointColor='#070E1A' rootColor={sexIsValidate ? '#797979' : '#CC1946'} value="M">
                                M
                            </RadioButton>
                            <RadioButton pointColor='#070E1A' rootColor={sexIsValidate ? '#797979' : '#CC1946'} value="K">
                                K
                            </RadioButton>
                        </RadioGroup>
                    </Form>
                    <Button 
                    nameVal={nameVal} 
                    callbackValidation={callbackValidation}
                    descriptionVal={descriptionVal}
                    ageVal={ageVal}
                    sexVal={sexVal}
                    ></Button>
                </Container>
    )
}

export default AppendForm