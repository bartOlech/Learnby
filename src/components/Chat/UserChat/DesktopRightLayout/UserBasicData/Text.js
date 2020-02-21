import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    margin-bottom: 40px;

`
const TextBox = styled.div`
    display: flex;
`
const ConstantText = styled.span`
    font-family: ${FontStyle.family};
    color: #76849D;
    font-size: 1.3em;
    padding-right: 7px;
`
const DataText = styled.span`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.3em;
`

const Text = (props) => {
    return (
        <Container>
            <TextBox>
                <ConstantText>{props.constantText}</ConstantText><DataText>{props.dataText}</DataText>
            </TextBox>
        </Container>
    )
}

export default Text;