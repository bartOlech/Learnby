import React from 'react';
import styled from 'styled-components';
import CommentInuptField from './CommentInputField';
import CommentSendButton from './CommentSendButton';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`

const CreateCommentBox = () => {
    return (
        <Container>
            <CommentInuptField></CommentInuptField>
            <CommentSendButton></CommentSendButton>
        </Container>
    )
}

export default CreateCommentBox;