import React from 'react';
import styled from 'styled-components';
import ButtonsPhotoBox from './Buttons_Photo/Buttons_PhotoBox';
import DescriptionUser from './DescriptionUser';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UpperSection = (props) => {
    return (
        <Container>
            <ButtonsPhotoBox photo={props.photo}></ButtonsPhotoBox>
            <DescriptionUser
                name={props.name}
                age={props.age}
                description={props.description}
                place={props.place}
                sex={props.sex}
            ></DescriptionUser>
        </Container>
    )
}

export default UpperSection;