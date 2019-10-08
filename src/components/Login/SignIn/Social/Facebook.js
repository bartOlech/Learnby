import React from 'react';
import styled from 'styled-components';
import FacebookIco from '../../../../assets/img/Mobile/facebook1.svg';

const Container = styled.div`
    width: 60px;
    height: 60px;
    margin-right: 20px;
`
const Button = styled.div`
    width: 60px;
    height: 60px;
    background-image: url(${FacebookIco});
    background-repeat: no-repeat;
    background-size: 60px 60px;
    cursor: pointer;
`

const Facebook = () => {
    return (
        <Container>
            <Button></Button>
        </Container>
    )
}

export default Facebook;