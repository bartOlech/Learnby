import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import ProgressCircles from './ProgressCircles';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
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
    border: 1px solid #C6C6C6;
    border-radius: 3px;
    font-family: ${FontStyle.family};
    font-size: 1.23em;
    margin-bottom: 30px;
    outline: none;
    padding-left: 10px;
`
const Select = styled.select`
    width: 290px;
    height: 43px;
    border: 1px solid #C6C6C6;
    border-radius: 3px;
    font-family: ${FontStyle.family};
    font-size: 1.3em;
    outline: none;
`
const Option = styled.option`

`

const FormLayout1 = () => {
    return (
        <Container>
            <Label htmlFor='subject'>Czego chcesz się uczyć?</Label>
            <Input id='subject' type='text' placeholder='np. Język Angielski'></Input>

            <Label>Dopasuj poziom swojej wiedzy</Label>
            <ProgressCircles></ProgressCircles>

            <Label htmlFor='contact'>Interesuje mnie kontakt:</Label>
            <Select id='contact'>
                <Option value="remote">Zdalny</Option>
                <Option value="meeting">Meeting</Option>
            </Select>

        </Container>
    )
}

export default FormLayout1