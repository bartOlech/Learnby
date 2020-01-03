import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../../assets/style/style';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FindAnnouncementConsumer } from '../../../../../../context/CurrentUser.context';

const Button = styled.button`
    width: 110px;
    height: 31px;
    border: none;
    border-radius: 14px;
    background-color: #E0F5F5;
    color: #4DB6AC;
    margin-right: 20px;
    font-family: ${FontStyle.family};
    font-size: 1em;
    cursor: pointer;
    position: absolute;
    right: 0;
    outline: none;
`

const CheckButton = (props) => {
    return (
        <FindAnnouncementConsumer>
            {({getAnnouncementById}) => (
                <Link to={{
                    pathname: `/announcement/${props.id}`
                }}>
                    <Button onClick={() => getAnnouncementById(props.id)}>Sprawdź</Button>
                </Link>
            )}
        </FindAnnouncementConsumer>
    )
}

export default CheckButton;