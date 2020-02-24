import React from 'react';
import styled from 'styled-components';
import PadlockIco from '../../../../../../assets/img/Desktop/Chat/padlock.svg';


const Container = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${PadlockIco});
    background-repeat: no-repeat;
    background-size: 30px 30px;
    cursor: pointer;
    position: absolute;
    left: -150px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
`

const BlockUserButton = () => {
    return (
        <Container>

        </Container>
    )
}

export default BlockUserButton;