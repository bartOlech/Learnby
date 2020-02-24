import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    background-image: url(${[props => props.image]});
    background-repeat: no-repeat;
    background-size: 45px 45px;
    margin-top: 25px;
    margin-left: 15px;
    box-shadow:
    0 0px 1.3px rgba(0, 0, 0, 0.073),
    0 0px 2px rgba(0, 0, 0, 0.107),
    0 0px 2px rgba(0, 0, 0, 0.18)
    ;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: -31px;
    &&:before {
        content: '';
        width: 50px;
        height: 4px;
        background-color: #28D0B9;
        border-radius: 10px;
        position: absolute;
        top: 80px;
        left: -1px;
    }
`

const Image = (props) => {
    return (
        <Container image={props.image}>
            
        </Container>
    )
}

export default Image;