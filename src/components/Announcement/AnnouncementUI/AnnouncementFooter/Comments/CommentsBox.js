import React, { useState } from 'react';
import styled from 'styled-components';
import TopicText from './TopicText';
import Comment from './Comment';
import waveBackground from '../../../../../assets/img/Mobile/waveCommentBackground.svg';
// temporary
import userImage from '../../../../../assets/img/Mobile/user.svg';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
    background-image: url(${waveBackground});
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
                            TextOfName='Weronika'
                            userImage={userImage}
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



