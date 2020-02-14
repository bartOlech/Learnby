import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff;
    opacity: .05;
    border: none;
    border-radius: 50%;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
`

const Circle = (props) => {
    return (
        <Component top={props.top} left={props.left}>

        </Component>
    )
}

export default Circle;