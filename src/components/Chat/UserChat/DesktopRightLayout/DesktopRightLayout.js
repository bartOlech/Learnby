import React from 'react';
import styled from 'styled-components';
import Name from './UserDataComponents/Name';
import ButtonsUserBox from './UserDataComponents/Buttons&ImageBox/ButtonsUserBox';

const Container = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0;
    @media(max-width: 1100px) {
        display: none
    }
`

const DesktopRightLayout = (props) => {
    return (
        <Container>
            <Name name={props.name}></Name>
            <ButtonsUserBox image={props.image}></ButtonsUserBox>
        </Container>
    )
}

export default DesktopRightLayout;