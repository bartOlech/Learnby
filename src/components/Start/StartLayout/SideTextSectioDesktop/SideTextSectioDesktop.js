import React from 'react';
import styled from 'styled-components';
import TemplateBox from './AboutTemplates/TemplateBox';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 300px;
    margin-top: 100px;
`

const SideTextSectioDesktop = () => {
    return (
        <Container>
            <TemplateBox></TemplateBox>
        </Container>
    )  
}

export default SideTextSectioDesktop;