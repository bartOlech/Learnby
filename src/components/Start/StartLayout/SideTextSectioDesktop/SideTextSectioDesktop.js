import React from 'react';
import styled from 'styled-components';
import TemplateBox from './AboutTemplates/TemplateBox';
import UpperBackgroundBox from './UpperBackground/UpperBackgroundBox';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 300px;
    margin-top: 100px;
`

const SideTextSectioDesktop = () => {
    return (
        <Container>
            <UpperBackgroundBox></UpperBackgroundBox>
            <TemplateBox></TemplateBox>
        </Container>
    )  
}

export default SideTextSectioDesktop;