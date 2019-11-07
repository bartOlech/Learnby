import React from 'react';
import styled from 'styled-components';
import TopicText from './TopicText';
import Comment from './Comment';

// temporary
import userImage from '../../../../../assets/img/Mobile/user.svg';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
`

const CommentBox = () => {
    return (
        <Container>
            <TopicText amountOfComments='1'></TopicText>
            <Comment
                textOfComment='Ten gość jest super'
                time='2 dni temu'
                userImage={userImage}
            ></Comment>
        </Container>
    )
}

export default CommentBox;