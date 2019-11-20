import React, { useState } from 'react';
import styled from 'styled-components';
import CommentSendButton from './CommentSendButton';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`
const Input = styled.input`
    width: 250px;
    height: 45px;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 2px #A0A6B1;
    outline:  none;
    padding-left: 10px;
    font-family: ${FontStyle.family};
    font-size: 1.4em;
    font-weight: 300;
    &&::placeholder {
        color: #A0A6B1;
    }
`

const CreateCommentBox = () => {
    const[commentValue, setCommentValue] = useState('')

    const clear = () => {
        setCommentValue('')
    }
    return (
        <Container>
            <Input value={commentValue} onChange={el => setCommentValue(el.target.value)} type='text' placeholder='Napisz komentarz'></Input>
            <CommentSendButton clear={clear} commentValue={commentValue}></CommentSendButton>
        </Container>
    )
}

export default CreateCommentBox;