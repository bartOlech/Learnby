import React from 'react'
import AnnouncementBoxTemplate from '../AnnouncementBoxTemplate';
import AnnouncementBoxTemplateSide from '../AnnouncementBoxTemplateSide';

const GetMainAnnouncements = (announcementList) => {
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
                levelOfKnowledge={value.LevelOfKnowledge}
            ></AnnouncementBoxTemplate>
        )
    }
    return list
}

const GetSideAnnouncements = (announcementList) => {
    let list = []
    for(let [key, value] of announcementList.entries()) {
        list.push(
            <AnnouncementBoxTemplateSide
                key={key}
                id={key}
                Subject={value.Subject}
                UserName={value.AnnouncementCreator.UserName}
                Description={value.Description}
                Place={value.Place}
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