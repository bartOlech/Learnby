import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import { FindAnnouncementConsumer } from '../../../../../context/CurrentUser.context';
import firebase from '../../../../../Firebase.config';

const Button = styled.button`
    width: 107px;
    height: 50px;
    background-color: ${FontStyle.color};
    font-family: ${FontStyle.family};
    font-size: 1.5em;
    border: none;
    border-radius: 5px;
    outline: none;
    color: #fff;
    text-align: center;
    margin-right: -40px;
    cursor: pointer;
`


const ForwardButton = (props) => {
    return (
        <FindAnnouncementConsumer>
            {({ addAnnouncementData, addAnnouncementLayoutNumeber, setAnnouncementLayout, sendAnnouncementToFirestore }) => (
                <Button onClick={() => {
                    const{ city, subject, name, surname, age, regulations, description } = addAnnouncementData;
                    if(addAnnouncementLayoutNumeber === 0) {
                        if(city && subject){
                            setAnnouncementLayout(true)
                        } else {
                            props.callbackValidationLayout0(city, subject)
                        }
                    }
                    if(addAnnouncementLayoutNumeber === 1) {
                        if(name && surname && age){
                            setAnnouncementLayout(true)
                        } else {
                            props.callbackValidationLayout1(name, surname, age)
                        }
                    }
                    if(addAnnouncementLayoutNumeber === 2) {
                        if(regulations && description){
                            setAnnouncementLayout(true)
                            sendAnnouncementToFirestore(firebase.getCurrentUserAllData(), firebase.getCurrentUid())
                        } else {
                            props.callbackValidationLayout2(regulations, description)
                        }
                    }
                }}>
                    {addAnnouncementLayoutNumeber === 2 ? 'Wyślij' : 'Dalej'}
                </Button>
            )}
        </FindAnnouncementConsumer>
    )
}

export default ForwardButton;