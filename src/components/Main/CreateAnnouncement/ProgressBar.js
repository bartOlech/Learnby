import React from 'react';
import styled from 'styled-components';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Container = styled.div`
  @media(min-width: 1000px) {
    margin-top: -12px;
  }
`
const Bar = styled.div`
    &&::before {
        content: '';
        width: 40px;
        height: 10px;
        background-color: #262F3F;
        position: absolute;
        top: 78px;
    }
`
const BarEnd = styled.div`
    &&::before {
        content: '';
        width: 60px;
        height: 10px;
        background-color: #DDDDDD;
        position: absolute;
        top: 78px;
        right: 0;
    }
`

const ProgressBar = (props) => {
    return (
        <Container>
            <Bar></Bar>
            <Progress 
            style={{width: '100%'}}
            percent={props.layoutNumber === 0 ? '25' : (props.layoutNumber === 1 ? '50' : (props.layoutNumber === 2 ? '75' : (props.layoutNumber === 3 ? '100' : null)))}
            theme={
                {
                  active: {
                    symbol: ' ',
                    trailColor: '#DDDDDD',
                    color: '#262F3F',
                  },
                  success: {
                    symbol: ' ',
                    trailColor: '#DDDDDD',
                    color: '#262F3F',
                  }
                }
              }
            ></Progress>
            <BarEnd></BarEnd>
        </Container>
    )
}

export default ProgressBar;