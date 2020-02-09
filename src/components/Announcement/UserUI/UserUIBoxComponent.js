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
    @media(min-width: 1000px) {
        margin-top: 35px;
    }
`

const UserUIBoxComponent = () => {
    return (
        <FindAnnouncementConsumer>
            {({ selectedAnnouncementData }) => (
                    <Container>
                        <UserImage
                            userImage={selectedAnnouncementData[0].AnnouncementCreator.PhotoUrl}
                        ></UserImage>
                        <UserData
                            name={selectedAnnouncementData[0].AnnouncementCreator.UserName}
                            age={selectedAnnouncementData[0].AnnouncementCreator.Age}
                        ></UserData>
                    </Container>
                )
            }
        </FindAnnouncementConsumer>
    )
}

export default UserUIBoxComponent;