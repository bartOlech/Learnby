import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import likeIco from '../../../../assets/img/Mobile/like.svg';
import likeIcoGreen from '../../../../assets/img/Mobile/heart-green.svg';
import { FindAnnouncementConsumer } from '../../../../context/CurrentUser.context';
import firebase from '../../../../Firebase.config';
import { BrowserRouter as Router, useParams} from 'react-router-dom';
import { fadeIn } from 'react-animations';
 
const Container = styled.div`
   
`
const Button = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${props => props.ico});
    background-repeat: no-repeat;
    background-size: 30px 30px;
    cursor: pointer;
    margin-left: 10px;
    animation: ${props => props.animation};
`
// LikeIco animation
const bounceAnimation = keyframes`${fadeIn}`;

const LikeButton = () => {
    const[isLike, setIsLike] = useState(false)
    let{ id } = useParams()

    const likeAnnouncement = () => { 
        isLike ? setIsLike(false) : setIsLike(true)
    }

    const checkLiked = (likesArray) => {
        firebase.isInitialized().then(() => {
            let wasLiked = ''

            if(likesArray !== undefined) {
                wasLiked = likesArray[0].includes(id)
            }

            if(wasLiked) {
                setIsLike(true)
            } else {
                setIsLike(false)
            }
        })  
    } 

    return (
        <FindAnnouncementConsumer>
            {({ AnnouncementLikes, announcementSetLike, announcementIsLiked }) => (
                <Container>
                    {checkLiked(AnnouncementLikes)}
                    <Button 
                    // animation={AnnouncementLikes.includes(id) ? css`1s ${bounceAnimation}` : 'none'}  
                    ico={isLike ? likeIcoGreen : likeIco} 
                    onClick={() => {
                        likeAnnouncement()
                        announcementSetLike(id)
                    }}></Button>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default LikeButton;