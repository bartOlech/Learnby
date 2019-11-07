import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 77px;
    height: 77px;
    border-radius: 50%;
    margin-left: 11px;
`
const Image = styled.div`
    width: 77px;
    height: 77px;
    background-image: url(${props => props.userImage});
    background-repeat: no-repeat;
    background-size: 77px 77px;
    border-radius: 50%;
    margin-top: 3px;
    position: relative;
    &&::after {
        content: '';
        width: 81px;
        height: 81px;
        position: absolute;
        z-index: -1;
        top: -2px;
        right: -2px;
        background-color: rgba(200, 206, 234, 0.88);
        border-radius: 50%;
    }
`

const UserImage = (props) => {
    return (
        <Container>
            <Image userImage={props.userImage}></Image>
        </Container>
    )
}

export default UserImage;