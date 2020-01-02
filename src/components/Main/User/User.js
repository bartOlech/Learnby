import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../Header/Header';
import WavyBackground from '../../../assets/img/Mobile/wave-bck-header-mobile.svg';
import UpperSection from './UserSections/UpperSection/UpperSection';
import { FindAnnouncementConsumer } from '../../../context/CurrentUser.context';
import { BrowserRouter as Router, useParams } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const User = () => {
    const[executed, setExecuted] = useState(true)
    let { id }  = useParams();

    return (
        <FindAnnouncementConsumer>
            {({ userDataFromUserCollection, getUserDataIfRefresh }) => (
                <Container>
                    {executed ? (
                        getUserDataIfRefresh(id),
                        setExecuted(false)
                    ) : null}
                    {userDataFromUserCollection ? (
                        <div>
                            <Header background={`url(${WavyBackground}) no-repeat `}></Header>
                            <UpperSection photo={userDataFromUserCollection.PhotoUrl}></UpperSection>
                        </div>  
                    ) : null}
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default User;