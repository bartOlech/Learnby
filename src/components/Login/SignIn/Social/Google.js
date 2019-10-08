import React from 'react';
import styled from 'styled-components';
import GoogleIco from '../../../../assets/img/Mobile/search.svg';

const Container = styled.div`
    width: 60px;
    height: 60px;
    margin-left: 20px;
`
const Button = styled.div`
    width: 60px;
    height: 60px;
    background-image: url(${GoogleIco});
    background-repeat: no-repeat;
    background-size: 60px 60px;
    cursor: pointer;
`

const Google = () => {
    return (
        <Container>
            <Button></Button>
        </Container>
    )
}

export default Google;