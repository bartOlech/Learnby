import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import Name from './Name';

const Container = styled.div`
    display: flex;
    margin-top: 20px;
    margin-left: 10px;
    background-color: ${props => props.background};
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
`

const User = (props) => {
    return (
        <Container background={props.background}>
            <Image image={props.image}></Image>
            <Name name={props.name}></Name>
        </Container>
    )
}

export default User;