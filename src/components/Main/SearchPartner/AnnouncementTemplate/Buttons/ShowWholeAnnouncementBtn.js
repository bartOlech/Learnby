import React from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../../../assets/style/style';

const Button = styled.div`
    width: 194px;
    height: 36px;
    border: none;
    border-radius: 24px;
    background-color: #4DB6AC;
    color: #fff;
    font-family: ${FontStyle.family};
    font-size: 1.4em;
    cursor: pointer;
    outline: none;
    text-align: center;
    padding-top: 5px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 15px;
`

const ShowWholeAnnouncementBtn = () => {
    return (
        <React.Fragment>
            <Button onClick={() => console.log('check announcement')}>Sprawdź</Button>
        </React.Fragment>
    )
}

export default ShowWholeAnnouncementBtn;