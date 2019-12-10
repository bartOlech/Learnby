import React from 'react';
import styled from 'styled-components';
import Logo from '../../Header/Logo';
import ProgressBar from './ProgresBar';
import FormLayout1 from './FormLayout/FormLayout1/FormLayout1';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const CreateAnnouncementSection = () => {
    return (
        <Container>
            <Logo></Logo>
            <ProgressBar></ProgressBar>
            <FormLayout1></FormLayout1>
        </Container>
    )
}

export default CreateAnnouncementSection;