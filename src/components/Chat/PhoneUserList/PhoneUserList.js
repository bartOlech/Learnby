import React from 'react';
import styled from 'styled-components';
import DesktopLeftLayout from '../UserChat/DesktopLeftLayout/DesktopLeftLayout';

const Container = styled.div`

`

const PhoneUserList = () => {

    const UpdateUserMessages = () => {
        
    }

    return (
        <Container>
            <DesktopLeftLayout UpdateUserMessages={UpdateUserMessages} display='inline' userId='mWBuVDnGQCQ8vtT1CbcQRwO1Qyu1'></DesktopLeftLayout>
        </Container>
    )
}

export default PhoneUserList;