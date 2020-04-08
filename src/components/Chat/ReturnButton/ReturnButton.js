import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import backIco from '../../../assets/img/Desktop/Chat/return-arrow.svg';
// media queries
import Media from 'react-media';

import { BrowserRouter as Router, Link } from 'react-router-dom';

const Container = styled.div`
    /* width: 200px; */
    left: ${props => props.left};
    top: ${props => props.top};
    cursor: pointer;
    @media(min-width: 1100px) {
        position: absolute;
  }
`
const Ico = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${backIco});
    background-repeat: no-repeat;
    background-size: 40px 40px;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: #252E3F;
    font-size: 1.5em;
    padding-top: 5px;
`

const Box = styled.div`
    display: flex;
`


const ReturnButton = (props) => {
    return (
        <Container top={props.top} left={props.left}>
            <Media query="(min-width: 1100px)" render={() => (
                <Link style={{textDecoration: 'none'}} to='/'>
                    <Box>
                        <Ico></Ico>
                        <Text>Powrót</Text>
                    </Box>
                </Link>
            )}
            />
            <Media query="(max-width: 1100px)" render={() => (
                <Link style={{textDecoration: 'none'}} to='/phoneUserList'>
                    <Box>
                        <Ico></Ico>
                        <Text>Powrót</Text>
                    </Box>
                </Link>
            )}
            />
        </Container>
    )
}

export default ReturnButton;