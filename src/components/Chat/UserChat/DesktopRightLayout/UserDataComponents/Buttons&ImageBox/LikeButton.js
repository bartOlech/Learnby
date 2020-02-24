import React, { useState } from 'react';
import styled from 'styled-components';
import likeIco from '../../../../../../assets/img/Mobile/heart-grey.svg'
import likeIcoGreen from '../../../../../../assets/img/Mobile/heart-green.svg'

const Container = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${props => props.ico});
    background-repeat: no-repeat;
    background-size: 30px 30px;
    cursor: pointer;
    position: absolute;
    left: 150px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
`

const LikeButton = () => {
    const[isLike, setIsLike] = useState(false)

    const likeAnnouncement = () => { 
        isLike ? setIsLike(false) : setIsLike(true)
    }

    return (
        <Container ico={isLike ? likeIcoGreen : likeIco} onClick={likeAnnouncement}>

        </Container>
    )
}

export default LikeButton;