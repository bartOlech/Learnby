import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../assets/style/style';
import CreateCommentBox from './CreateComment/CreateCommentBox';
import CommentsBox from './Comments/CommentsBox';
import { FindAnnouncementConsumer } from '../../../../context/CurrentUser.context';
import { GetSideAnnouncements } from '../../../Main/SearchPartner/AnnouncementTemplate/Functions/GetAnnouncement';

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 430px;
    margin-top: 50px;
    position: relative;
`
const Text = styled.div`
    padding-left: 16px;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 15px;
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgba(190, 190, 190, .75);
    margin-bottom: 37px;
    @media(min-width: 1000px) {
        margin-top: -45px;
    }
`
const SideAnnouncement = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    right: 80px;
    top: -12px;
`
const CommentContainer = styled.div`
    
`

const AnnouncementFooterBox = () => {
    return (
        <FindAnnouncementConsumer>
            {({ commentsArray, newestAnnouncement }) => (
                <Container>
                    <HorizontalLine></HorizontalLine>
                    <CommentContainer>
                        <Text>Komentarze:</Text>
                        <CreateCommentBox></CreateCommentBox>
                        <CommentsBox 
                            commentsArray={commentsArray}
                        ></CommentsBox>
                    </CommentContainer>
                    <SideAnnouncement>
                        <Text style={{marginTop: '50px', marginLeft: '-25px'}} size='1.6em'>Polecane:</Text>
                        {GetSideAnnouncements(newestAnnouncement)}
                    </SideAnnouncement>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default AnnouncementFooterBox;