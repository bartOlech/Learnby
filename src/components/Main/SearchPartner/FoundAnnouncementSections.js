import React, { useState, isValidElement } from 'react';
import AnnouncementBoxTemplate from './AnnouncementTemplate/AnnouncementBoxTemplate';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// media queries
import Media from 'react-media';
// get announcements functions
import { GetMainAnnouncements, GetSideAnnouncements } from './AnnouncementTemplate/Functions/GetAnnouncement'


const Container = styled.div`
    margin-top: 10px;
    width: 100%;
    @media (max-width: 1200px) {
        width: 600px;
        margin-left: auto;
        margin-right: auto;
        margin-left: -80px;
    }
    @media (min-width: 1000px) {
        margin-left: -20px;
    }
    @media (max-width: 500px) {
        margin-left: 20px;
    }
`

const Text = styled.h2`
    text-align: left;
    color: ${FontStyle.color};
    font-family: ${FontStyle.family};
    font-size: ${props => props.size};
    font-weight: 600;
    margin-top: -30px;
    padding-bottom: 10px;
    margin-left: 20px;
`
const AnnouncementsBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const MainAnnouncements = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const SideAnnouncement = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media(max-width: 1300px) {
        display: none;
    }
`

const FoundAnnouncementSection = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        accessibility: true
      };

    return (
        <div>  
            <Container>
                {/* Phone */}
                <Media query="(max-width: 500px)" render={() =>
                    (
                        <React.Fragment>
                            <Text style={{marginTop: '50px'}} size='1.6em'>{props.tittle}</Text>
                            <Slider {...settings}>
                                {GetMainAnnouncements(props.announcementList)}
                            </Slider>
                        </React.Fragment>
                    )}
                />
                {/* Desktop */}
                <Media query="(min-width: 500px)" render={() =>
                    (
                        <AnnouncementsBox>
                            <MainAnnouncements>
                                <Text style={{marginTop: '50px', marginLeft: '50px'}} size='1.6em'>{props.tittle}</Text>
                                {GetMainAnnouncements(props.announcementList)}
                            </MainAnnouncements>
                            <SideAnnouncement>
                                <Text style={{marginTop: '50px', marginLeft: 0}} size='1.6em'>Najnowsze:</Text>
                                {GetSideAnnouncements(props.newestAnnouncement)}
                            </SideAnnouncement>
                        </AnnouncementsBox>                        
                    )}
                />
        </Container>
        </div>
    )
}

export default FoundAnnouncementSection;





