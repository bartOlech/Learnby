import React from 'react';
import StartPage from './components/Main/StartPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginSection from './components/Routes/Login/LoginSection';
import AddNoticeSection from './components/Routes/AddNotice/AddNoticeSection';
import AboutSection from './components/Routes/Footer/AboutSection';
import CareerSection from './components/Routes/Footer/CareerSection';
import MediaSection from './components/Routes/Footer/MediaSection';
import PolicySection from './components/Routes/Footer/Policy';
import RegulationsSection from './components/Routes/Footer/Regulations';
// login
import SignInContainer from './containers/SignIn/SignInContainer';
import SignUpContainer from './containers/SignUp/SignUpContainer';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact component={StartPage}></Route>
        {/* <Route path='/findPartner/' component={Example}></Route> */}
        <Route path='/login/' component={SignInContainer}></Route>
        <Route path='/register/' component={SignUpContainer}></Route>
        <Route path='/addNotice/' component={AddNoticeSection}></Route>
        {/* footer */}
        <Route path='/about/' component={AboutSection}></Route>
        <Route path='/career/' component={CareerSection}></Route>
        <Route path='/media/' component={MediaSection}></Route>
        <Route path='/policy/' component={PolicySection}></Route>
        <Route path='/regulations/' component={RegulationsSection}></Route>
      </div>
    </Router>
  );
}

export default App;
