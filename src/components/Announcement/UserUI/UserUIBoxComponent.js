import React, { useState } from 'react';
import styled from 'styled-components';
import UserImage from './UserImage';
import UserData from './UserData';
import { FindAnnouncementConsumer } from '../../../context/CurrentUser.context';
import { BrowserRouter as Router, useParams } from 'react-router-dom'
import ReportUser from './ReportUser/ReportUser';
// media queries
import Media from 'react-media';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: -50px;
    margin-bottom: -100px;
    @media(min-width: 1000px) {
        margin-top: 35px;
        position: relative;
    }
`

const UserUIBoxComponent = () => {
    const[executed, setExecuted] = useState(true)
    let { id }  = useParams();

    return (
        <FindAnnouncementConsumer>
            {({ selectedAnnouncementData, getAnnouncementByIdRepeatToRefreshPage }) => (
                    <Container>
                        {executed ? (
                            getAnnouncementByIdRepeatToRefreshPage(id),
                            setExecuted(false)
                        ) : null}
                        <UserImage
                            userImage={selectedAnnouncementData[0].AnnouncementCreator.PhotoUrl}
                        ></UserImage>
                        <UserData
                            name={selectedAnnouncementData[0].AnnouncementCreator.UserName}
                            age={selectedAnnouncementData[0].AnnouncementCreator.Age}
                        ></UserData>
                        <ReportUser></ReportUser>
                    </Container>
                )
            }
        </FindAnnouncementConsumer>
    )
}

export default UserUIBoxComponent;