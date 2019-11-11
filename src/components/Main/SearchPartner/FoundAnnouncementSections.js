import React from 'react';
import AnnouncementBoxTemplate from './AnnouncementTemplate/AnnouncementBoxTemplate';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Context
// import { FindUserConsumer } from '../../../context/CurrentUser.context';

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
                    {props.announcementsArray.length === props.userArray.length ? (
                        props.announcementsArray.map((el, index) => {
                            return (
                                <AnnouncementBoxTemplate
                                    key={props.listID[index]}
                                    id={props.listID[index]}
                                    Subject={el.Subject}
                                    UserName={props.userArray[index].name}
                                    Description={el.Description}
                                    Place={el.Place}
                                    UserPhoto={props.userArray[index].photo}
                            ></AnnouncementBoxTemplate>
                            )
                        })
                    ) : null}
                    
                </Slider>
            </Container>
        </div>
       
    )
}

export default FoundAnnouncementSection;





