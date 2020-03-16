import React, { useState } from 'react';
import styled from 'styled-components';
import FindAnnouncementSection from '../../Main/SearchPartner/FindAnnouncementSection';
import { FontStyle } from '../../../assets/style/style';
import Login from '../Login/Login';
import AddNotice from '../AddNotice/AddNotice';
import desktopLogo from '../../../assets/img/Desktop/Logo-desktop.svg';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import DesktopPlusIco from '../../../assets/img/Desktop/plus.svg';
import { CurrentUserConsumer } from '../../../context/CurrentUser.context';
import userIco from '../../../assets/img/Mobile/logUser.svg';
import UserMenu from '../UserMenu/UserMenu';
import firebase from '../../../Firebase.config';

const Container = styled.div`
    width: 100%;
    height: ${props => props.height};
    background: linear-gradient(#22A795, #3AAF9F);
    box-shadow: -1px 2px 10px -6px rgba(0,0,0,0.75);
    display: flex;
    flex-direction: column;
`
const UpperList = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    position: relative;
`
const RightButtons = styled.div`
    width: 140px;
    height: 100px;
    position: absolute;
    right: 0;
    top: 4px;
    padding-right: 40px;
`
const LogoDesktop = styled.div`
    width: 240px;
    height: 240px;
    background-image: url(${desktopLogo});
    background-size: 240px 240px;
    background-repeat: no-repeat;
    margin: -85px 0 15px 15px;
    opacity: .9;
`
const Text = styled.h1`
    width: 800px;
    font-family: ${FontStyle.family};
    color: #fff;
    font-size: 2.4em;
    position: absolute;
    top: 70px;
    left: 77px; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    font-weight: 600;
    display: ${props => props.displayText};
`
const UserSection = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
`
const Image = styled.div`
    margin: 17px 0 0 110px;
    width: 41px;
    height: 41px;
    border: none;
    box-shadow: -1px 2px 14px -6px rgba(0,0,0,0.75);
    border-radius: 50%;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 41px 41px;
    outline: none;
    cursor: pointer;
`

const DesktopHeader = (props) => {
    const[isHideImage, setIsHideImage] = useState(true)

    const clickImage = () => {
        isHideImage ? setIsHideImage(false) : setIsHideImage(true)
    }

    return (
        <Container height={props.height}>
            <UpperList>
                <Link to=''><LogoDesktop></LogoDesktop></Link>
                <RightButtons>
                    {/* Sign up / user ico & add notice*/}
                    <CurrentUserConsumer>
                        {({ user }) => (
                            user ? (
                                <React.Fragment>
                                    <UserSection>
                                        <AddNotice margin='-1px -310px 0 0' background='#fff' image={`url(${DesktopPlusIco})`} color='#262F3F'></AddNotice>
                                        {firebase.getCurrentUserAllData() !== null} {
                                            !firebase.getCurrentUserAllData().photoURL ? (
                                                <Image onClick={clickImage} image={userIco}></Image>
                                            ) : (
                                                <Image onClick={clickImage} image={`${firebase.getCurrentUserAllData().photoURL}?type=normal`}></Image>
                                            )
                                        }
                                    </UserSection> 
                                    {!isHideImage && <UserMenu isHideImage={isHideImage}/>}
                                </React.Fragment>
                            ):(
                                <React.Fragment>
                                    <AddNotice background='#fff' image={`url(${DesktopPlusIco})`} color='#262F3F'></AddNotice>
                                    <Link to='/login'><Login background='#273B48'></Login></Link> 
                                </React.Fragment>
                            )
                        )}
                    </CurrentUserConsumer>    
                </RightButtons>
            </UpperList>
            <Text displayText={props.displayText}>Najlepsze miejsce w sieci do wspólnej nauki.</Text>
            <FindAnnouncementSection display={props.displaySearchInput}></FindAnnouncementSection>
        </Container>
    )
}

export default DesktopHeader;