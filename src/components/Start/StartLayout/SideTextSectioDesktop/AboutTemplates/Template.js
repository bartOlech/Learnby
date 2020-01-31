import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 500px;
    height : 500px;
    
`
const Image = styled.div`
    width: 400px;
    height : 350px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 400px 350px;
`

const Template = (props) => {
    return (
        <Container>
            <Image image={props.image}></Image>
        </Container>
    )
}

export default Template;