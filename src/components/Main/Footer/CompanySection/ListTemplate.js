import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 170px;
`
const List = styled.ul`
    list-style-position: inside;
`
const Text = styled.li`
    font-family: ${FontStyle.family};
    color: #1D8076;
    font-size: 1.2em;
`

const Career = (props) => {
    return (
        <Container>
            <List>
                <Link style={{textDecoration: 'none'}} to={props.link}><Text key={props.key}>{props.text}</Text></Link>
            </List>
        </Container>
    )
}

export default Career;