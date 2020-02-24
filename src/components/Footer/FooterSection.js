import React from 'react';
import styled from 'styled-components';
import CompanySection from './CompanySection/CompanyBox';
import ContactSection from './ContactSection/ContactBox';

const Container = styled.div`
    width: 100%;
    height: 100%;
    @media(min-width: 1000px) {
        display: flex;
    }
`

const FooterSection = () => {
    return (
        <Container>
            <CompanySection></CompanySection>
            <ContactSection></ContactSection>
        </Container>
    )
}

export default FooterSection;