import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components'
import StartPage from './components/Start/StartPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateAnnouncementSection from './components/Main/CreateAnnouncement/CreateAnnouncementSection';
import AboutSection from './components/Routes/Footer/AboutSection';
import CareerSection from './components/Routes/Footer/CareerSection';
import MediaSection from './components/Routes/Footer/MediaSection';
import PolicySection from './components/Routes/Footer/Policy';
import RegulationsSection from './components/Routes/Footer/Regulations';
// context
import { CurrentUserProvider } from './context/CurrentUser.context';
// login
import SignInContainer from './containers/SignIn/SignInContainer';
import SignUpContainer from './containers/SignUp/SignUpContainer';
// firebase
import firebase from './Firebase.config';
// main section
import MainSectionContainer from './containers/MainSection/MainSectionContainer';
// separate announcement
import AnnouncementComonent from './components/Announcement/AnnouncementBoxComponent';
// user section
import User from './components/Main/User/User';
// Chat
import MessagesListBox from './components/Chat/MessagesList/MessagesListBox';
import Chatroom from './components/Chat/UserChat/Chatroom';
import PhoneUserList from './components/Chat/PhoneUserList/PhoneUserList';
// append user data during the registration
import AppendUserData from './components/Login/SignUp/AppendUserData/AppendUserData';

const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
}
`

function App() {

  const [firebaseInitialized, setFirebaseInitialized] = useState('');

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })

  return (
      <Router>
        <CurrentUserProvider>
          <Route>
            <GlobalStyle/>
            {/* <div>{firebase.getCurrentUser()}</div> */}
            <Route path='/' exact component={StartPage}></Route>
            {/* <Route path='/findPartner/' component={Example}></Route> */}
            <Route path='/login/' component={SignInContainer}></Route>
            <Route path='/register/' component={SignUpContainer}></Route>
            <Route path='/findPartner/' component={MainSectionContainer}></Route>
            <Route path='/createAnnouncement/' component={CreateAnnouncementSection}></Route>
            <Route path='/announcement/:id' component={AnnouncementComonent}></Route>
            <Route path='/user/:id' component={User}></Route>
            <Route path='/messagesList' component={MessagesListBox}></Route>
            <Route path='/chat/:id' component={Chatroom}></Route>
            <Route path='/appendData' component={AppendUserData}></Route>
            <Route path='/phoneUserList' component={PhoneUserList}></Route>
            {/* footer */}
            <Route path='/about/' component={AboutSection}></Route>
            <Route path='/career/' component={CareerSection}></Route>
            <Route path='/media/' component={MediaSection}></Route>
            <Route path='/policy/' component={PolicySection}></Route>
            <Route path='/regulations/' component={RegulationsSection}></Route>
          </Route>
        </CurrentUserProvider>
      </Router>
  )
}

export default App;
