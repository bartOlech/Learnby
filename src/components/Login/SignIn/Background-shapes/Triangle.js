import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`

const Triangle1 = styled.div`
    width: 0;
    height: 0;
    border-bottom: 300px solid #fff;
    border-left: 100px solid #3AAF9F;
    background-color: #fff;
    opacity: .2;
    position: absolute;
    bottom:  0;
    right: 0;
`
const Triangle2 = styled.div`
    width: 0;
    height: 0;
    border-bottom: 370px solid #fff;
    border-left: 130px solid #3AAF9F;
    background-color: #fff;
    opacity: .1;
    position: absolute;
    bottom:  0;
    right: 0;
`

const Triangle = (props) => {
    return (
        <Container>
            <Triangle1></Triangle1>
            <Triangle2></Triangle2>
        </Container>
    )
}

export default Triangle;