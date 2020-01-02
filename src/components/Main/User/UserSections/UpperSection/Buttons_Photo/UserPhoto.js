import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`
const Photo = styled.div`
    width: 101px;
    height: 101px;
    margin: -21px 45px 0 45px; 
    background-image: url(${props => props.photo});
    background-repeat: no-repeat;
    background-size: 101px 101px;
    border-radius: 50%;
    box-shadow:
    0 0px 1.3px rgba(0, 0, 0, 0.073),
    0 0px 4.5px rgba(0, 0, 0, 0.107),
    0 0px 20px rgba(0, 0, 0, 0.18)
    ;
`

const UserPhoto = (props) => {
    return (
        <Container>
            <Photo photo={props.photo}></Photo>
        </Container>
    )
}

export default UserPhoto;