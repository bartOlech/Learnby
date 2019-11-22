import React from 'react';
import styled from 'styled-components';
import TopicText from './TopicText';
import Comment from './Comment';
import waveBackground from '../../../../../assets/img/Mobile/waveCommentBackground.svg';
import firebase from '../../../../../Firebase.config';


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
            <TopicText amountOfComments={props.announcementComments.length}></TopicText>
            
            {props.announcementComments.map((el, index) => {
                
                return (
                    <React.Fragment>
                        <Comment
                            textOfComment={el.Content}
                            TextOfName='Weronika'
                            userImage={userImage}
                            likeAmount={el.Likes.length}
                            key={index}
                        ></Comment>
                    </React.Fragment>
                )
            })}
        </Container>
    )
}

export default CommentBox;



