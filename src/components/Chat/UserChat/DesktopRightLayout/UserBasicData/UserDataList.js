import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 0;
    margin-top: 10px;

`

const UserDataList = (props) => {
    return (
        <Container>
            <Text constantText='Miejsce:' dataText={props.place}></Text>
            <Text constantText='Wiek:' dataText={props.age}></Text>
            <Text constantText='Płeć:' dataText={props.sex}></Text>
        </Container>
    )
}

export default UserDataList;