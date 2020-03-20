import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import LikeGreyIco from '../../../../../assets/img/Mobile/heart-grey.svg';
import LikeRedIco from '../../../../../assets/img/Mobile/heart-green.svg';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { fadeIn } from 'react-animations';
// Firebase
import firebase from '../../../../../Firebase.config';

const Container = styled.div`
    width: 90%;
    min-width: 100px;
    height: 100%;
    /* min-height: 65px; */
    background-color: #fff;
    position: relative;
    margin-left: 15px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const FirstRow = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2px;
`    
const UserImage = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-image: url(${props => props.userImage});
    background-repeat: no-repeat;
    background-size: 35px 35px;
    margin-left: 10px;
`    
const Text = styled.div`
    width: 100%;
    max-width: 650px;
    height: 100%;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.4em;
    margin-left: 15px;
    padding-top: 3px;
    font-size: 1.2em;
`
const LikeContainer = styled.div`
    width: 50px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin-left: 60px;
    margin-top: 10px;
`
const LikeAmount = styled.div`
    font-family: ${FontStyle.family};
    color: #5C5C5C;
    position: absolute;
    right: 10px;
`
const LikeBox = styled.div`
    position: absolute;
    right: 40px;
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

// LikeIco animation
const bounceAnimation = keyframes`${fadeIn}`;

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
    animation: ${props => props.animation};
`
const TextContainer = styled.div`
    display: flex;
    margin-left: 40px;
    margin-top: -35px;
`

const Comment = (props) => {
    let { id }  = useParams();
    let likesArray = props.likeArray;
    const currentUid = firebase.getCurrentUid()

    // TO USE IN THE FUTURE
    const[isLiked, setIsLiked] = useState(false) 

    const likeComment = () => { 
        const{ commentKey } = props;
        // get object from the firestore
        if(currentUid !== null){
            if(!likesArray.includes(currentUid)) {
                setIsLiked(true)

                likesArray.push(currentUid)

                // template to update firestore'
                let LikesUpdate = {};
                LikesUpdate[`Comments.${commentKey}.Likes`] = likesArray;


                // send the updated object to the firestore
                firebase.sendDataToFirestore('Announcements').doc(id).update(LikesUpdate)
                .catch(err => console.log(err))

            } else {
                if(currentUid !== null){
                    if(likesArray.includes(currentUid)) {
                        setIsLiked(false)

                        // remove currentUid from array
                        let index = likesArray.indexOf(currentUid);
                        if (index !== -1) likesArray.splice(index, 1);

                        // template to update firestore'
                        let LikesUpdate = {};
                        LikesUpdate[`Comments.${commentKey}.Likes`] = likesArray;

                        // send the updated object to the firestore
                        firebase.sendDataToFirestore('Announcements').doc(id).update(LikesUpdate)
                        .catch(err => console.log(err))
                    }
                } 
            }
        } 
    }

    const{ userImage, likeArray, TextOfName, textOfComment } = props;
    return (
        <Container>
            <UserImage userImage={userImage}></UserImage>
            <TextContainer>
                
                <FirstRow>
                    <Text style={{marginTop: '-10px', marginBottom: '10px'}}>{TextOfName}</Text>
                    <Text style={{fontWeight: 300, marginTop: '1px'}}>{textOfComment}</Text>
                </FirstRow>
            </TextContainer>
            <LikeContainer>
            <LikeAmount data-testid='likeAmount'>{likeArray.length}</LikeAmount>
            <LikeBox data-testid='likeBox' onClick={likeComment}>
                <LikeBackground display='inline'></LikeBackground>
                <LikeIco 
                animation={likeArray.includes(currentUid) ? css`1s ${bounceAnimation}` : 'none'} 
                image={likeArray.includes(currentUid) ? LikeRedIco : LikeGreyIco}></LikeIco>
            </LikeBox>
            </LikeContainer>
        </Container>
    )
}

export default Comment;