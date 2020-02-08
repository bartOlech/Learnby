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
    @media (min-width: 500px) {
        width: 900px;
        
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
                        <React.Fragment>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <Text style={{marginTop: '50px', marginLeft: '50px'}} size='1.6em'>{props.tittle}</Text>
                                <Text style={{marginTop: '50px', marginLeft: '680px'}} size='1.6em'>Najnowsze:</Text>
                            </div>
                            {GetMainAnnouncements(props.announcementList)}
                        </React.Fragment>                        
                    )}
                />
            
        </Container>
        </div>
    )
}

export default FoundAnnouncementSection;





