import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 50px 50px;
`

const Image = (props) => {
    return (
        <Container image={props.image}>
        </Container>
    )
}

export default Image;