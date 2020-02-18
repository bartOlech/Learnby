import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import shadowElementWider from '../../../../../assets/img/Desktop/Chat/shadow-element-wider.svg';
import shadowElementNarrower from '../../../../../assets/img/Desktop/Chat/shadow-element-narrower.svg';

const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: #28D0B9;
    position: relative;
`
const Text = styled.p`
    width: 100px;
    height: 30px;
    font-family: ${FontStyle.family};
    color: #fff;
    font-size: 1.7em;
    position: absolute;
    left: 5px;
    top: 0;
    bottom: 5px;
    margin-top: auto;
    margin-bottom: auto;
`
const ShadowElement1 = styled.div`
    width: 120px;
    height: 100%;
    position: absolute;
    right: 0;
    background-image: url(${shadowElementWider});
    background-repeat: no-repeat;
    background-size: 120px 60px;
`
const ShadowElement2 = styled.div`
    width: 60px;
    height: 100%;
    position: absolute;
    right: 0;
    background-image: url(${shadowElementNarrower});
    background-repeat: no-repeat;
    background-size: 120px 60px;
`

const MessageText = () => {
    return (
        <Container>
            <Text>Wiadomości</Text>
            <ShadowElement1></ShadowElement1>
            <ShadowElement2></ShadowElement2>
        </Container>
    )
}

export default MessageText;