import React, { useState, isValidElement } from 'react';
import AnnouncementBoxTemplate from './AnnouncementTemplate/AnnouncementBoxTemplate';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Context
import { FindAnnouncementConsumer } from '../../../context/CurrentUser.context';
// firebase
import firebase from '../../../Firebase.config';

const Container = styled.div`
    margin-top: 10px;
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

const FoundAnnouncementSection = (props) => {

    const getAnnouncements = (announcementList) => {
        let list = []
        for(let [key, value] of announcementList.entries()) {
            list.push(
                <AnnouncementBoxTemplate
                    key={key}
                    id={key}
                    Subject={value.Subject}
                    UserName={value.AnnouncementCreator.UserName}
                    Description={value.Description}
                    Place={value.Place}
                    UserPhoto={value.AnnouncementCreator.PhotoUrl}
                ></AnnouncementBoxTemplate>
            )
        }
        return list
    }

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
            <Text style={{marginTop: '50px'}} size='1.6em'>{props.tittle}</Text>
            <Slider {...settings}>
                {getAnnouncements(props.announcementList)}
            </Slider>
        </Container>
        </div>
    )
}

export default FoundAnnouncementSection;





