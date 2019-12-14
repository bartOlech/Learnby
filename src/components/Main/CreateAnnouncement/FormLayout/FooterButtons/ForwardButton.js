import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';
import { FindAnnouncementConsumer } from '../../../../../context/CurrentUser.context';

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


const ForwardButton = () => {
    return (
        <FindAnnouncementConsumer>
            {({ addAnnouncementLayoutNumeber, setAnnouncementLayout, sendAnnouncementToFirestore }) => (
                <Button onClick={() => {
                    setAnnouncementLayout(true)
                    if(addAnnouncementLayoutNumeber === 2) {
                        sendAnnouncementToFirestore()
                    }
                }}>
                    {console.log(addAnnouncementLayoutNumeber)}
                    {addAnnouncementLayoutNumeber === 2 ? 'Wyślij' : 'Dalej'}
                </Button>
            )}
        </FindAnnouncementConsumer>
    )
}

export default ForwardButton;