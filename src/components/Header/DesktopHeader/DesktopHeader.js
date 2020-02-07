import React from 'react';
import styled from 'styled-components';
import FindAnnouncementSection from '../../Main/SearchPartner/FindAnnouncementSection';
import { FontStyle } from '../../../assets/style/style';
import Login from '../Login/Login';
import AddNotice from '../AddNotice/AddNotice';
import desktopLogo from '../../../assets/img/Desktop/Logo-desktop.svg';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import DesktopPlusIco from '../../../assets/img/Desktop/plus.svg';

const Container = styled.div`
    width: 100%;
    height: 262px;
    background: linear-gradient(#22A795, #3AAF9F);
    /* background: #3AAF9F; */
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
    right: -15px;
    top: 4px;
    padding-right: 40px;
`
const LogoDesktop = styled.div`
    width: 240px;
    height: 240px;
    background-image: url(${desktopLogo});
    background-size: 240px 240px;
    background-repeat: no-repeat;
    margin: -80px 0 15px 15px;
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
`

const DesktopHeader = () => {
    return (
        <Container>
            <UpperList>
                <Link to='/'><LogoDesktop></LogoDesktop></Link>
                <RightButtons>
                    <AddNotice background='#fff' image={`url(${DesktopPlusIco})`} color='black'></AddNotice>
                    <Link to='/login'><Login background='#262F3F'></Login></Link> 
                </RightButtons>
            </UpperList>
            <Text>Najlepsze miejsce w sieci do wspólnej nauki.</Text>
            <FindAnnouncementSection></FindAnnouncementSection>
        </Container>
    )
}

export default DesktopHeader;