import React from 'react';
import styled from 'styled-components';
import MainContent from './MainContent';
import JoinBtn from '../../Start/StartLayout/JoinSection/CreateAccountBtn';
import CreateAnnouncement from './CreateAnnouncement/CreateAnnouncement';
import { CurrentUserConsumer } from '../../../context/CurrentUser.context';

const Container = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
`


const BoxComponent = () => {
    return (
        <Container>
            <CurrentUserConsumer>
                {({ user }) => (
                    user ? (
                        <React.Fragment>
                            <MainContent
                                upperText='Nie znalazłeś partnera?'
                                bottomText='Dodaj swoje ogłoszenie!'
                            ></MainContent>
                            <CreateAnnouncement></CreateAnnouncement>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <MainContent
                                upperText='Nie masz jeszcze konta?'
                                bottomText='Dołącz do największego grona wzajemnej nauki!'
                            ></MainContent>
                            <JoinBtn></JoinBtn>
                        </React.Fragment>
                    )
                )}
            </CurrentUserConsumer>
        </Container>
    )
}

export default BoxComponent;