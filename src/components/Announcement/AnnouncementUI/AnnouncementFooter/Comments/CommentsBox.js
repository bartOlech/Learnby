import React from 'react';
import styled from 'styled-components';
import TopicText from './TopicText';
import Comment from './Comment';
import waveBackground from '../../../../../assets/img/Mobile/waveCommentBackground.svg';
import { FindAnnouncementConsumer } from '../../../../../context/CurrentUser.context';

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

const CommentBox = () => {
    return (   
        <FindAnnouncementConsumer>
            {({ announcementComments }) => (
                <Container>
                    {console.log(announcementComments)}
                    <TopicText amountOfComments='2'></TopicText>
                    <Comment
                        textOfComment='Ten gość jest super'
                        TextOfName='Weronika'
                        userImage={userImage}
                        likeAmount='1'
                    ></Comment>
                    <Comment
                        textOfComment='Bardzo miła współpraca :)'
                        TextOfName='Przemek'
                        userImage={userImage}
                        likeAmount='3'
                    ></Comment>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default CommentBox;



