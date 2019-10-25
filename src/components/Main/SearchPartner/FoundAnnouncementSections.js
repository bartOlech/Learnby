import React from 'react';
import AnnouncementBoxTemplate from './AnnouncementTemplate/AnnouncementBoxTemplate';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Context
import { FindUserConsumer } from '../../../context/CurrentUser.context';

const Container = styled.div`

`

const Text = styled.h2`
    text-align: center;
    color: ${FontStyle.color};
    font-family: ${FontStyle.family};
    font-size: ${props => props.size};
    font-weight: 600;
    margin-top: -30px;
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
                <Text style={{marginTop: '50px', marginLeft: '-100px'}} size='1.5em'>{props.tittle}</Text>
                <Slider {...settings}>
                    {props.announcementsArray.map((el, index) => {
                        return (
                            <AnnouncementBoxTemplate
                                key={props.listID[index]}
                                Subject={el.Subject}
                                UserName={el.UserName}
                                Description={el.Description}
                                Place={el.Place}
                        ></AnnouncementBoxTemplate>
                        )
                    })}
                </Slider>
            </Container>
        </div>
       
    )
}

export default FoundAnnouncementSection;





