import React, { useState } from 'react';
import styled  from 'styled-components';
import CommentSendButton from './CommentSendButton';
import { FontStyle } from '../../../../../assets/style/style';
import firebase from '../../../../../Firebase.config';
import { FindAnnouncementConsumer } from '../../../../../context/CurrentUser.context';
import { BrowserRouter as Router, useParams } from 'react-router-dom';

const Container = styled.div`
    
`
const Input = styled.input`
    width: 80%;
    max-width: 608px;
    height: 40px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 2px 0px rgba(82,82,82,.5);
    outline:  none;
    padding-left: 10px;
    padding-top: 10px;
    font-family: ${FontStyle.family};
    font-size: 1.3em;
    font-weight: 300;
    &&::placeholder {
        color: #A0A6B1;
    }
`
const InputBox = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    margin-left: 16px;
`
const InputText = styled.span`
    position: absolute;
    font-family: ${FontStyle.family};
    font-size: ${props => props.size};
    color: ${props => props.color};
    pointer-events: none;
    left: 10px;
    top: ${props => props.top};
    transition: 0.2s ease all;
    font-weight: ${props => props.weight};
`

const CreateCommentBox = () => {
    const[commentValue, setCommentValue] = useState('')
    const[isLogged, setIsLogged] = useState(false)
    const[textIsFilled, setTextIsFilled] = useState(false)

    let { id }  = useParams();

    const clear = () => {
        setCommentValue('')
    }

    return (
        <FindAnnouncementConsumer>
            {({ sendComment, selectedAnnouncementData }) => (
                <Container>
                    <InputBox>
                        <InputText
                            color={isLogged ? 'red' : 'grey'}
                            top={textIsFilled ? '1px' : '13px'}
                            size={textIsFilled ? '1em' : '1.3em'}
                            weight={textIsFilled ? '500' : '300'}
                        >
                            {isLogged ? 'Zaloguj się' : 'Napisz Komentarz'}
                        </InputText>
                            <Input 
                                data-testid='comment-input'
                                value={commentValue} 
                                onChange={el => {
                                    setCommentValue(el.target.value); 
                                    if(el.target.value === '') {
                                        setTextIsFilled(false)
                                        setIsLogged(false)
                                    } else {
                                        if(firebase.getCurrentUid()) {
                                            setIsLogged(false)
                                        } else {
                                            setIsLogged(true)
                                        }
                                        setTextIsFilled(true)
                                    }
                                }} 
                                onKeyDown={(e) => {
                                    if(e.key === 'Enter') {
                                        if(commentValue !== '' && firebase.getCurrentUid() !== selectedAnnouncementData[0].AnnouncementCreator.UserId ) {
                                            if(firebase.getCurrentUid() !== null){
                                                sendComment(commentValue, firebase.getCurrentUid(), id, firebase.getCurrentUserAllData());
                                                clear();
                                            } else {
                                            //you have to sign in
                                            }
                                        }
                                    }
                                }} 
                                type='text' 
                                >
                            </Input>
                            <CommentSendButton clear={clear} commentValue={commentValue}></CommentSendButton>
                    </InputBox>
                </Container>
            )}
        </FindAnnouncementConsumer>
        
    )
}

export default CreateCommentBox;