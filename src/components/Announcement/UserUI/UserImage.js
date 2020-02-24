import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 77px;
    height: 77px;
    border-radius: 50%;
    margin-left: 11px;
    @media(min-width: 1000px) {
        margin-top: -6px;
    }
`
const Image = styled.div`
    width: 77px;
    height: 77px;
    background-image: url(${props => props.userImage});
    background-repeat: no-repeat;
    background-size: 77px 77px;
    border-radius: 50%;
    margin-top: 3px;
    position: absolute;
`

const UserImage = (props) => {
    return (
        <Container>
            <Image userImage={props.userImage}></Image>
        </Container>
    )
}

export default UserImage;