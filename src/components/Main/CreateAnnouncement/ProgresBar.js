import React from 'react';
import styled from 'styled-components';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Container = styled.div`

`
const Bar = styled.div`
    width: 100%;
    height: 10px;
    background-color: #DDDDDD;
    top: 78px;
    position: absolute;
    z-index: -1;
    &&::before {
        content: '';
        width: 20px;
        height: 10px;
        background-color: #262F3F;
        position: absolute;
    }
`

const ProgresBar = () => {
    return (
        <Container>
            <Bar></Bar>
            <Progress 
            percent='25'
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