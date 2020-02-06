import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style';
import Arrow from './Arrow';


const Container = styled.h1`
    width: 100%;
    height: 100%;
    font-family: ${FontStyle.family};
    color: #099a97;
    font-size: 5em;
    margin-left: ${props => props.marginLeft};
    margin-bottom: 15px;
    margin-top: 30px;
    @media (max-width: 1000px) {
        margin-top: 88px;
        margin-right: 50px;
    }
`

const Number = (props) => {
    return (
        <Container marginLeft={props.marginLeft}>
            {props.number}
        </Container>
    )
}

export default Number;