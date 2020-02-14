import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff;
    opacity: .05;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    transform: ${props => props.rotate};
`

const Square = (props) => {
    return (
        <Component top={props.top} left={props.left} rotate={props.rotate}>

        </Component>
    )
}

export default Square;