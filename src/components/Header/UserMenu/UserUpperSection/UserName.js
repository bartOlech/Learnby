import React from 'react';
import styled from 'styled-components';
import firebase from '../../../../Firebase.config';
import { FontStyle } from '../../../../assets/style/style';

const Container = styled.div`
    margin-bottom: 5px;
`
const Text = styled.span`
    font-family: ${FontStyle.family};
    font-size: 1em;
    color: ${FontStyle.color};
    margin-left: 3px;
`

const UserName = () => {
    return (
        <Container>
            {firebase.getCurrentUserAllData() !== null} {
                <Text>{firebase.getCurrentUserAllData().displayName.replace(/ .*/,'')}</Text>
            }
        </Container>
    )
}

export default UserName;