import React from 'react';
import styled from 'styled-components';
import MenuIco from '../../../assets/img/Mobile/menu.svg';

const Container = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 8px;
    right: 20px;
`
const Button = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${MenuIco});
    background-repeat: no-repeat;
    background-size: 40px 40px;
    cursor: pointer;
`

const buttonHandle = () => {
    console.log('show menu, move to the container catalog');
}

const HamburgerBtn = () => {
    return (
        <Container>
            <Button onClick={buttonHandle}></Button>
        </Container>
    )
}

export default HamburgerBtn;