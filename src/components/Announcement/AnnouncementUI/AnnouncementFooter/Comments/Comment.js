import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Container = styled.div`
    width: 100%;
    min-width: 100px;
    height: 100%;
    min-height: 65px;
    background-color: #fff;
    border-radius: 6px;
    position: relative;
    box-shadow: 1px 1px 3px #A0A6B1;
    margin-left: 15px;
    &&::before {
        content: '';
        width: 3px;
        height: 100%;
        background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
        position: absolute;
        left: 1px;
        top: 0;
        border-radius: 10px;
    }
`
const FirstRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 10px;
    padding-top: 2px;
`    
const UserImage = styled.div`
    width: 35px;
    height: 35px;
    background-image: url(${props => props.userImage});
    background-repeat: no-repeat;
    background-size: 35px 35px;
`    
const TextOfComment = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.4em;
    margin-left: 15px;
    padding-top: 3px;
`
const Time = styled.div`
    font-family: ${FontStyle.family};
    color: #A0A6B1;
    font-size: 1.1em;
    margin-left: 15px;
    padding-top: 5px;
`

const Comment = (props) => {
    return (
        <Container>
            <FirstRow>
                <UserImage userImage={props.userImage}></UserImage>
                <TextOfComment>{props.textOfComment}</TextOfComment>
            </FirstRow>
            <Time>{props.time}</Time>
        </Container>
    )
}

export default Comment;