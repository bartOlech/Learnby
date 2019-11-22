import React from 'react';
import styled from 'styled-components';
import sendIco from '../../../../../assets/img/Mobile/send.svg';
import { FindAnnouncementConsumer } from '../../../../../context/CurrentUser.context';
import firebase from '../../../../../Firebase.config';
import { BrowserRouter as Router, useParams } from 'react-router-dom'

const Container = styled.div`
    
`
const Button = styled.div`
    width: 50px;
    height: 44px;
    background-color: #4DB6AC;
    border-radius: 9px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
            {({ sendComment }) => (
                <Container>
                    <Button onClick={() => {
                        if(props.commentValue !== '') {
                            if(firebase.getCurrentUid() !== null){
                                sendComment(props.commentValue, firebase.getCurrentUid(), id);
                                props.clear();
                            } else {
                                // props.userIsLogged(false);
                            }
                        }
                        }}><Ico></Ico></Button>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default CommentSendButton;