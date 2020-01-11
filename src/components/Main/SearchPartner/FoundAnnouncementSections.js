import React, { useState } from 'react';
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
    const[announcementUser, setAnnouncementUser] = useState([])

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
        <FindAnnouncementConsumer>
            {({ searchedAnnouncements, announcementListId }) => (
                <div>  
                    {console.log(searchedAnnouncements)}
                    <Container>
                    <Text style={{marginTop: '50px'}} size='1.6em'>{props.tittle}</Text>
                    <Slider {...settings}>
                        {searchedAnnouncements.length > 1 ? (
                            searchedAnnouncements.map((el, index) => {
                                return (
                                    <AnnouncementBoxTemplate
                                        key={index}
                                        id={announcementListId[index]}
                                        Subject={el.Subject}
                                        UserName={el.AnnouncementCreator.UserName}
                                        Description={el.Description}
                                        Place={el.Place}
                                        UserPhoto={el.AnnouncementCreator.PhotoUrl}
                                    ></AnnouncementBoxTemplate>
                                )
                            }) 
                        ): null}
                    </Slider>
                </Container>
                </div>
            )}
        </FindAnnouncementConsumer>
    )
}

export default FoundAnnouncementSection;





