import React from 'react';
import styled from 'styled-components';
import sendIco from '../../../../../assets/img/Mobile/send.svg';
import { FindAnnouncementConsumer } from '../../../../../context/CurrentUser.context';
import firebase from '../../../../../Firebase.config';
import { BrowserRouter as Router, useParams } from 'react-router-dom'

const Container = styled.div`
    margin-left: 20px;
`
const Button = styled.div`
    width: 58px;
    height: 54px;
    background-color: #4DB6AC;
    border-radius: 9px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -1px;
`
const Ico = styled.div`
    width: 28px;
    height: 28px;
    background-image: url(${sendIco});
    background-repeat: no-repeat;
    background-size: 28px 28px;
`

const CommentSendButton = (props) => {
    let { id }  = useParams();

    return (
        <FindAnnouncementConsumer>
            {/* DODAJ WCISNIECIE PRZYCISKU ENETEREM */}
            {({ sendComment, selectedAnnouncementData }) => (
                <Container>
                    {props.pressEnter ? (
                        console.log('click')
                    ):null}
                    <Button 
                    onClick={() => {
                        if(props.commentValue !== '' && firebase.getCurrentUid() !== selectedAnnouncementData[0].AnnouncementCreator.UserId ) {
                            if(firebase.getCurrentUid() !== null){
                                sendComment(props.commentValue, firebase.getCurrentUid(), id, firebase.getCurrentUserAllData());
                                props.clear();
                            } else {
                            //you have to sign in
                            }
                        }
                        }}
                        ><Ico></Ico></Button>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default CommentSendButton;