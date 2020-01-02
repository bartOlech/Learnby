import React from 'react';
import styled from 'styled-components';
import UserImage from './UserImage';
import UserData from './UserData';
import { FindAnnouncementConsumer } from '../../../context/CurrentUser.context';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: -50px;
    margin-bottom: -100px;
`

const UserUIBoxComponent = () => {
    return (
        <FindAnnouncementConsumer>
            {({ selectedAnnouncemenUserData }) => (
                selectedAnnouncemenUserData.length ? (
                    <Container>
                        <UserImage
                            userImage={selectedAnnouncemenUserData[0].PhotoUrl}
                        ></UserImage>
                        <UserData
                            name={selectedAnnouncemenUserData[0].UserName}
                            age='21'
                        ></UserData>
                    </Container>
                ) : null
                )
            }
        </FindAnnouncementConsumer>
    )
}

export default UserUIBoxComponent;