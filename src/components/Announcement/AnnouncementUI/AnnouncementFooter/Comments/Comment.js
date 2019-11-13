import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import LikeGreyIco from '../../../../../assets/img/Mobile/heart-grey.svg';
import LikeRedIco from '../../../../../assets/img/Mobile/heart-red.svg';

const Container = styled.div`
    width: 90%;
    min-width: 100px;
    height: 100%;
    min-height: 65px;
    background-color: #fff;
    position: relative;
    margin-left: 15px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`
const FirstRow = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2px;
`    
const UserImage = styled.div`
    width: 35px;
    height: 35px;
    background-image: url(${props => props.userImage});
    background-repeat: no-repeat;
    background-size: 35px 35px;
    margin-left: 10px;
`    
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.4em;
    margin-left: 15px;
    padding-top: 3px;
    font-size: 1.2em;
`
const LikeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const LikeAmount = styled.div`
    font-family: ${FontStyle.family};
    color: #5C5C5C;
    position: absolute;
    right: 40px;
`
const LikeBox = styled.div`
    position: absolute;
    right: 15px;
    cursor: pointer;
`
const LikeBackground = styled.div`
    width: 31px;
    height: 31px;
    background-color: #E2E2E2;
    border-radius: 50%;
    position: relative;
    display: ${props => props.display};
`
const LikeIco = styled.div`
    width: 20px;
    height: 18px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 20px 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`


const Comment = (props) => {
    return (
        <Container>
            <UserImage userImage={props.userImage}></UserImage>
            <FirstRow>
                <Text style={{marginTop: '-10px', marginBottom: '10px'}}>{props.TextOfName}</Text>
                <Text style={{fontWeight: 300, marginTop: '1px'}}>{props.textOfComment}</Text>
            </FirstRow>
            <LikeContainer>
                <LikeAmount>{props.likeAmount}</LikeAmount>
                <LikeBox>
                    <LikeBackground display='inline'></LikeBackground>
                    <LikeIco image={LikeGreyIco}></LikeIco>
                </LikeBox>
            </LikeContainer>
        </Container>
    )
}

export default Comment;