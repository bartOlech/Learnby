import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import LikeGreyIco from '../../../../../assets/img/Mobile/heart-grey.svg';
import LikeRedIco from '../../../../../assets/img/Mobile/heart-red.svg';
import { BrowserRouter as Router, useParams } from 'react-router-dom'
// Firebase
import firebase from '../../../../../Firebase.config';

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
    let { id }  = useParams();
    let likesArray = props.likeArray;
    const currentUid = firebase.getCurrentUid()

    // TO USE IN THE FUTURE
    const[isLiked, setIsLiked] = useState() 

    const[likeAmount, setLikeAmount] = useState(props.likeAmount)

    const likeComment = () => {
        // get object from the firestore
        if(currentUid !== null){
            if(!likesArray.includes(currentUid)) {
                console.log('like')
                setIsLiked(true)
                setLikeAmount(likeAmount + 1)

                likesArray.push(currentUid)

                // template to update firestore'
                let LikesUpdate = {};
                LikesUpdate[`Comments.${props.commentKey}.Likes`] = likesArray;


                // send the updated object to the firestore
                firebase.sendDataToFirestore('Announcements').doc(id).update(LikesUpdate)
                .catch(err => console.log(err))

            } else {
                console.log('unlike')
                if(currentUid !== null){
                    if(likesArray.includes(currentUid)) {
                        setIsLiked(false)
                        setLikeAmount(likeAmount - 1)

                        // remove currentUid from array
                        let index = likesArray.indexOf(currentUid);
                        if (index !== -1) likesArray.splice(index, 1);

                        // template to update firestore'
                        let LikesUpdate = {};
                        LikesUpdate[`Comments.${props.commentKey}.Likes`] = likesArray;

                        // send the updated object to the firestore
                        firebase.sendDataToFirestore('Announcements').doc(id).update(LikesUpdate)
                        .catch(err => console.log(err))
                    }
                } 
            }
        } 
    }
    
    return (
        <Container>
            <UserImage userImage={props.userImage}></UserImage>
            <FirstRow>
                <Text style={{marginTop: '-10px', marginBottom: '10px'}}>{props.TextOfName}</Text>
                <Text style={{fontWeight: 300, marginTop: '1px'}}>{props.textOfComment}</Text>
            </FirstRow>
            <LikeContainer>
                <LikeAmount>{likeAmount}</LikeAmount>
                <LikeBox onClick={likeComment}>
                    <LikeBackground display='inline'></LikeBackground>
                    <LikeIco image={LikeGreyIco}></LikeIco>
                </LikeBox>
            </LikeContainer>
        </Container>
    )
}

// GDY W TORUŃ USUWAM LIKE, W ZAMOSC DAJE LIKE NA -1

export default Comment;