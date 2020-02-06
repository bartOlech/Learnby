import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Container = styled.div`
    width: 350px;
    height: 100%;
    margin: 0 auto;
`
const List = styled.ul`
    list-style-position: inside;
    margin-left: 85px;
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
                {/* There is no key here (add if you want to add array as list!!!) */}
                <Link style={{textDecoration: 'none'}} to={props.link}><Text>{props.text}</Text></Link>
            </List>
        </Container>
    )
}

export default Career;