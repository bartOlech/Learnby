import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style';
import { BrowserRouter as Router, Link, useParams } from 'react-router-dom';
import { FindAnnouncementConsumer } from '../../../../../../context/CurrentUser.context';
import firebase from '../../../../../../Firebase.config';
// Notifications
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Button = styled.button`
    width: 300px;
    height: 50px;
    background-color: #3AAF9F;
    color: #fff;
    font-family: ${FontStyle.family};
    font-size: 1.4em;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    outline: none;
    font-weight: 600;
`

const GetContact = () => {
    let { id }  = useParams();

    const createNotification = (type) => {
        return () => {
          switch (type) {
            case 'warning':
              NotificationManager.info('Zaloguj się teraz', 'Nie jesteś zalogowany', 3000);
              break;
          }
        };
      };

    return (
        <FindAnnouncementConsumer>
            {({ createUserChatRoom }) => (
                <div>
                    {/* Notification */}
                    <NotificationContainer/>
                    {firebase.getCurrentUid() ? (
                        <Link onClick={() => {
                            createUserChatRoom(id)
                        }
                        } to={{pathname: `/chat/${id}`}}><Button>Nawiąż kontakt</Button>
                        </Link>
                    ) : (
                    <Button onClick={createNotification('warning')}>Nawiąż kontakt</Button>
                    )}
                </div>
            )}
        </FindAnnouncementConsumer>
    )
}

export default GetContact;