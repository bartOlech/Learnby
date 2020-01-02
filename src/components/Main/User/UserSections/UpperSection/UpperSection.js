import React from 'react';
import styled from 'styled-components';
import Buttons_PhotoBox from './Buttons_Photo/Buttons_PhotoBox';
import DescriptionUser from './DescriptionUser';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UpperSection = (props) => {
    return (
        <Container>
            <Buttons_PhotoBox photo={props.photo}></Buttons_PhotoBox>
        </Container>
    )
}

export default UpperSection;