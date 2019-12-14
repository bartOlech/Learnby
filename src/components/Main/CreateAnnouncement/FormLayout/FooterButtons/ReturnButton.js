import React from 'react';
import styled from 'styled-components';
import Ico from '../../../../../assets/img/Mobile/back.svg';
import { FontStyle } from '../../../../../assets/style/style';
import { FindAnnouncementConsumer } from '../../../../../context/CurrentUser.context';

const Button = styled.div`
    width: 120px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: -50px;
    cursor: pointer;
`
const ReturnIco = styled.div`
    width: 29px;
    height: 52px;
    background-image: url(${Ico});
    background-size: 29px 52px;
    background-repeat: no-repeat;
`
const Text = styled.div`
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.6em;  
    margin-top: 10px;
`

const ReturnButton = () => {
    return (
        <FindAnnouncementConsumer>
            {({ setAnnouncementLayout }) => (
                <Button onClick={() => {
                    setAnnouncementLayout(false)
                }}>
                    <ReturnIco></ReturnIco>
                    <Text>Wstecz</Text>
                </Button>
            )}
        </FindAnnouncementConsumer>
    )
}

export default ReturnButton;