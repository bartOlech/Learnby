import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style';
import CheckButton from './CheckButton';

const Container = styled.div`
    width: 100%;
    max-width: 600px;
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

    const writeSubjects = () => {
        let list = [];

        for ( let [key, value] of props.userAnnouncements.entries()) {
            list.push(<Li>{value}<CheckButton id={key}></CheckButton></Li>)
        }
        return list
    }
    return (
        <Container>
            
            <Text>{props.name.replace(/ .*/,'')} aktualnie uczy się:</Text>
            <List>
                {writeSubjects()}
            </List>
        </Container>
    )
}

export default UserActualLearn;