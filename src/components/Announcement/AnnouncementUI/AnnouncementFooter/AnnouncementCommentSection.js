import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import CreateCommentBox from './CreateComment/CreateCommentBox';
import CommentsBox from './Comments/CommentsBox';
import { FindAnnouncementConsumer } from '../../../../context/CurrentUser.context';

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 50px;
`
const Text = styled.div`
    padding-left: 16px;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 15px;
`

const AnnouncementFooterBox = () => {
    return (
        <FindAnnouncementConsumer>
            {({ commentsArray }) => (
                <Container>
                    <Text>Komentarze:</Text>
                    <CreateCommentBox></CreateCommentBox>
                    <CommentsBox 
                        commentsArray={commentsArray}
                        ></CommentsBox>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default AnnouncementFooterBox;