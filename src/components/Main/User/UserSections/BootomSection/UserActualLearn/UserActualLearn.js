import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style';
import CheckButton from './CheckButton';

const Container = styled.div`

`
const Text = styled.div`
    font-size: 1.6em;
    font-weight: 600;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    text-align: center;
    margin: 0 10px 25px 10px;
`
const List = styled.ul`
    margin-left: -18px;
`
const Li = styled.li`
    font-family: ${FontStyle.family};
    font-size: 1.3em;
    color: ${FontStyle.color};
    margin-bottom: 20px;
    position: relative;
    list-style-type: none;
    &&:before {
        content: "• ";
        margin-right: 10px;
        font-weight: bold;
        color: #DEF3EB; 
    }
`

const UserActualLearn = (props) => {
    return (
        <Container>
            <Text>{props.name.replace(/ .*/,'')} aktualnie uczy się:</Text>
            <List>
                <Li>Język Niemiecki <CheckButton></CheckButton></Li>
                <Li>Matematyka <CheckButton></CheckButton></Li>
            </List>
        </Container>
    )
}

export default UserActualLearn;