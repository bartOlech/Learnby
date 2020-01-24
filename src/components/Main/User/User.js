import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../Header/Header';
import WavyBackground from '../../../assets/img/Mobile/wave-bck-header-mobile.svg';
import UpperSection from './UserSections/UpperSection/UpperSection';
import BottomSection from './UserSections/BootomSection/BottomSection';
import { FindAnnouncementConsumer } from '../../../context/CurrentUser.context';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import firebase from '../../../Firebase.config';

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const HorizontalLine = styled.div`
    width: 90%;
    height: 2px;
    background-color: #E2E2E2;
    border-radius: 10px;
    margin: 18px auto;
`

const User = () => {
    const[executed, setExecuted] = useState(true)
    let { id }  = useParams();

    return (
        <FindAnnouncementConsumer>
            {({ userDataFromUserCollection, getUserDataIfRefresh, userAnnouncements, getUserAnnouncementsFromUserCollectionRefresh }) => (
                <Container>
                    {executed ? (
                        getUserDataIfRefresh(id),
                        getUserAnnouncementsFromUserCollectionRefresh(id),
                        setExecuted(false)
                    ) : null}
                    {userDataFromUserCollection ? (
                        <React.Fragment>
                            <Header background={`url(${WavyBackground}) no-repeat `}></Header>
                            <UpperSection 
                                photo={userDataFromUserCollection.PhotoUrl}
                                name={userDataFromUserCollection.Name}
                                age={userDataFromUserCollection.Age}
                                description={userDataFromUserCollection.Description ? userDataFromUserCollection.Description : 'Konto social, dodać funkcje, która tworzy opis'}
                                place={userDataFromUserCollection.Place}
                                sex={userDataFromUserCollection.Sex}
                            ></UpperSection>
                            <HorizontalLine></HorizontalLine>
                            <BottomSection userAnnouncements={userAnnouncements} name={userDataFromUserCollection.Name}></BottomSection>
                        </React.Fragment>  
                    ) : null}
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default User;