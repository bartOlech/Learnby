import React from 'react';
import styled from 'styled-components';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Container = styled.div`

`
const Bar = styled.div`
    width: 110%;
    height: 10px;
    background-color: ${props => props.bck};
    top: 78px;
    position: absolute;
    z-index: -1;
    &&::before {
        content: '';
        width: 40px;
        height: 10px;
        background-color: #262F3F;
        position: absolute;
    }
`

const ProgresBar = (props) => {
    return (
        <Container>
          {console.log(props.layoutNumber )}
            <Bar bck={props.layoutNumber === 3 ? '#252e3f' : '#DDDDDD'}></Bar>
            <Progress 
            percent={props.layoutNumber === 0 ? '25' : (props.layoutNumber === 1 ? '50' : (props.layoutNumber === 2 ? '75' : (props.layoutNumber === 3 ? '99' : null)))}
            theme={
                {
                  active: {
                    symbol: ' ',
                    trailColor: '#DDDDDD',
                    color: '#262F3F',
                  }
                }
              }
            ></Progress>
        </Container>
    )
}

export default ProgresBar;