import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import BlockUserButton from './BlockUserButton';
import LikeButton from './LikeButton';

const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    margin-top: 12px;
    position: relative;
`

const ButtonsUserBox = (props) => {
    return (
        <Container>
            <BlockUserButton></BlockUserButton>
            <Image image={props.image}></Image>
            <LikeButton></LikeButton>
        </Container>
    )
}

export default ButtonsUserBox;