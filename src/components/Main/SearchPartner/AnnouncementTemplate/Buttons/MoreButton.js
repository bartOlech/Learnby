import React from 'react';
import styled from 'styled-components';
// import { FontStyle } from '../../../../../assets/style/style';
import MoreIco from '../../../../../assets/img/Mobile/ellipsis.svg';
// import firebase from '../../../../../Firebase.config';

const Button = styled.div`
    width: 32px;
    height: 32px;
    background-image: url(${MoreIco});
    background-repeat: no-repeat;
    background-size: 32px 32px;
    cursor: pointer;
    outline: none;
    position: absolute;
    right: 20px;
    top: 5px;
`

const ShowWholeAnnouncementBtn = () => {

    // const firebaseTest = () => {
    //    firebase.getDataFromFirestore('Announcements').get().then((snapshot) => {
    //     snapshot.forEach(el => {
    //             arr.push(el.data())
    //         });
    //    })
    //    console.log(arr)
    // }

    return (
        <React.Fragment>
            <Button onClick={() => console.log('more button')}></Button>
            {/* <Button onClick={firebaseTest}></Button> */}
        </React.Fragment>
    )
}

export default ShowWholeAnnouncementBtn;