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

const MoreBtn = () => {

    return (
        <React.Fragment>
            <Button></Button>
            {/* <Button onClick={firebaseTest}></Button> */}
        </React.Fragment>
    )
}

export default MoreBtn;