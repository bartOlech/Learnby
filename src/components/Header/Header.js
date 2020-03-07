import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import AddNotice from './AddNotice/AddNotice';
import Login from './Login/Login';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { CurrentUserConsumer } from '../../context/CurrentUser.context';
import firebase from '../../Firebase.config';
import UserMenu from './UserMenu/UserMenu';
import userIco from '../../assets/img/Mobile/logUser.svg';
import MobilePlusIco from '../../assets/img/Mobile/plus.svg';

const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: ${props => props.background};
    background-size: cover;
    box-shadow: -1px 2px 10px -6px rgba(0,0,0,0.65);
    box-shadow: ${props => props.shadow};
`
const UserSection = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
`
const Image = styled.div`
    margin: 17px 0 0 40px;
    width: 41px;
    height: 41px;
    border: none;
    box-shadow: -1px 2px 5px -6px rgba(0,0,0,0.55);

    border-radius: 50%;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 41px 41px;
    outline: none;
    cursor: pointer;
`
const Header = (props) => {
    const[isHideImage, setIsHideImage] = useState(true)

    const clickImage = () => {
        isHideImage ? setIsHideImage(false) : setIsHideImage(true)
    }

    return (
        <Container background={props.background} shadow={props.shadow}>
            <Logo></Logo>
           
            <CurrentUserConsumer>
                {({ user }) => (
                    user ? (
                        <React.Fragment>
                            <UserSection>
                            <AddNotice margin='17px -240px 0 0' background='#DD9A76' image={`url(${MobilePlusIco})`} color='#fff'></AddNotice>
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
                              <AddNotice background='#DD9A76' image={`url(${MobilePlusIco})`} color='#fff'></AddNotice>
                            <Link to='/login'><Login background='#3AB397'></Login></Link> 
                        </React.Fragment>
                    )
                )}
            </CurrentUserConsumer>    
        </Container>
    )
}

export default Header;