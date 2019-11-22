import React, { useState } from 'react';
import styled, { keyframes, css }  from 'styled-components';
import CommentSendButton from './CommentSendButton';
import { FontStyle } from '../../../../../assets/style/style';
import firebase from '../../../../../Firebase.config';
import { bounce } from 'react-animations';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`
const Input = styled.input`
    width: 250px;
    height: 40px;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 2px #A0A6B1;
    outline:  none;
    padding-left: 10px;
    padding-top: 10px;
    font-family: ${FontStyle.family};
    font-size: 1.3em;
    font-weight: 300;
    animation: ${props => props.animation};
    &&::placeholder {
        color: #A0A6B1;
    }
`
const InputBox = styled.div`
    position: relative;
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

    const clear = () => {
        setCommentValue('')
    }

    return (
        <Container>
            <InputBox>
                <InputText
                    color={isLogged ? 'red' : 'grey'}
                    top={textIsFilled ? '1px' : '13px'}
                    size={textIsFilled ? '1em' : '1.3em'}
                    weight={textIsFilled ? '500' : '300'}
                >
                    {isLogged ? 'Zaloguj się' : 'Napisz Komentarz'}</InputText>
                <Input 
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
                    type='text' 
                    >
                </Input>
            </InputBox>
            <CommentSendButton clear={clear} commentValue={commentValue}></CommentSendButton>
        </Container>
    )
}

export default CreateCommentBox;