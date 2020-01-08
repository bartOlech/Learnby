import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`

`
const Button = styled.div`
    width: 78px;
    height: 24px;
    background-color: #1D8076;
    border: none;
    border-radius: 15px;
    outline: none;
    font-family: ${FontStyle.family};
    color: #fff;
    font-size: 1.2em;
    text-align: center;
    cursor: pointer;
`

const EditProfile = () => {
    return (
        <Container>
            <Button>Edytuj</Button>
        </Container>
    )
}

export default EditProfile;
