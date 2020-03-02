import React from 'react'
import AnnouncementBoxTemplate from '../AnnouncementBoxTemplate';
import AnnouncementBoxTemplateSide from '../AnnouncementBoxTemplateSide';

const GetMainAnnouncements = (announcementList) => {
    
    let list = []
    for(let [key, value] of announcementList.entries()) {
        let place = ''
        let description = ''
        // trim the place text
        console.log(value)
        if(value.Place.split('').length > 13) {
            place = value.Remote ? 'Zdalnie' : `${value.Place.split('').slice(0, 13).join('')}...`; 
        } else {
            place = value.Remote ? 'Zdalnie' : value.Place; 
        }
        // trim the description text
        if(value.Description.split('').length > 70) {
            description = `${value.Description.split('').slice(0, 70).join('')}...`
        } else {
            description = value.Description
        }
        list.push(
            <AnnouncementBoxTemplate
                key={key}
                id={key}
                Subject={value.Subject}
                UserName={value.AnnouncementCreator.UserName}
                Description={description}
                Place={place}
                UserPhoto={value.AnnouncementCreator.PhotoUrl}
                levelOfKnowledge={value.LevelOfKnowledge}
            ></AnnouncementBoxTemplate>
        )
    }
    return list
}

const GetSideAnnouncements = (announcementList) => {
    let list = []
    for(let [key, value] of announcementList.entries()) {
        let place = ''
        let description = ''
        // trim the place text
        if(value.Place.split('').length > 13) {
            place = `${value.Place.split('').slice(0, 13).join('')}...`
        } else {
            place = value.Place
        }
        // trim the description text
        if(value.Description.split('').length > 70) {
            description = `${value.Description.split('').slice(0, 70).join('')}...`
        } else {
            description = value.Description
        }
        list.push(
            <AnnouncementBoxTemplateSide
                key={key}
                id={key}
                Subject={value.Subject}
                UserName={value.AnnouncementCreator.UserName}
                Description={description}
                Place={place}
                UserPhoto={value.AnnouncementCreator.PhotoUrl}
                levelOfKnowledge={value.LevelOfKnowledge}
            ></AnnouncementBoxTemplateSide>
        )
    }
    return list
}

export  {
    GetMainAnnouncements,
    GetSideAnnouncements
}