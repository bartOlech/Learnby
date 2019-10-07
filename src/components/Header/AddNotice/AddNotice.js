import React from 'react';
import styled from 'styled-components';
import AddIco from '../../../assets/img/Mobile/plus-button.svg';

const Container = styled.div`
    width: 40px;
    height: 40px;
    margin-top: 20px;
    margin-left: 100px;
    padding: 0;
    background-image: url(${AddIco});
    background-repeat: no-repeat;
    background-size: cover;
`

const AddNotice = () => {
    return (
        <Container>
            
        </Container>
    )
}

export default AddNotice;