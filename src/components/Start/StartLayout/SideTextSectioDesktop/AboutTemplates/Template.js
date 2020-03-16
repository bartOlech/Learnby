import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height : 500px;
    z-index: 2;
    @media (max-width: 1035px) {
        margin-bottom: -70px;
        margin-top: -20px;
    }
`
const Image = styled.div`
    width: 400px;
    height : 350px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 400px 350px;
    @media (max-width: 1035px) {
        margin-left: 80px;
        background-size: 320px 270px;
    }
`

const Template = (props) => {
    return (
        <Container>
            <Image data-testid='template' image={props.image}></Image>
        </Container>
    )
}

export default Template;