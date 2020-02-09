import React, { useState } from 'react';
import styled from 'styled-components';
import TopicText from './TopicText';
import Comment from './Comment';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
    background-image: #fff;
    background-repeat: no-repeat;
    background-size: 900px 800px;
`

const CommentBox = (props) => {
    return (   
        <Container>
            <TopicText amountOfComments={props.commentsArray.length}></TopicText> 
            {props.commentsArray.map(el => {
                return(
                    <React.Fragment>
                        <Comment
                            textOfComment={el.value.Content}
                            TextOfName={el.value.Creator.UserName}
                            userImage={el.value.Creator.PhotoUrl}
                            likeAmount={el.value.Likes.length}
                            likeArray={el.value.Likes}
                            commentKey={el.key}
                        ></Comment>
                    </React.Fragment>
                )
            })} 
            </Container>
    )
}

export default CommentBox;



