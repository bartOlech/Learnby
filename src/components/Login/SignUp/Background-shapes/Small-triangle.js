import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    width: 0;
    height: 0;
    border-bottom: 100px solid #fff;
    border-right: 100px solid transparent;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    transform: ${props => props.rotate};
    opacity: .07;
`

const SmallTriangle = (props) => {
    return (
        <Component top={props.top} left={props.left} rotate={props.rotate}>

        </Component>
    )
}

export default SmallTriangle;