import React, { useState, useEffect } from 'react';
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
    const[likeArray, setLikeArray] = useState([])
    let{ id } = useParams()

    // componentDidMount
    useEffect(() => {
        firebase.isInitialized().then(() => {
            const currentUid = firebase.getCurrentUid()
            if(currentUid !== null){
                firebase.getDataFromFirestore('user').doc(currentUid).get().then(doc => {
                    likeArray.push(doc.data().AnnouncementLikes)
                    setLikeArray(likeArray)
    
                    if(likeArray[0].indexOf(id) !== -1) {
                        setIsLike(true)
                    } else {
                        setIsLike(false)
                    }
                })
            } else {
                console.log('not logged!')
            }
        })
    }, [])

    const likeAnnouncement = () => { 
        isLike ? setIsLike(false) : setIsLike(true)
    }

    const checkLiked = (likesArray) => {
        firebase.isInitialized().then(() => {
            
        })  
    } 

    return (
        <FindAnnouncementConsumer>
            {({ announcementSetLike }) => (
                <Container>
                    {/* {console.log(isLike)} */}
                    {checkLiked()}
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