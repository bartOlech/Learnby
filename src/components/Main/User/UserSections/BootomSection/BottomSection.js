import React from 'react';
import styled from 'styled-components';
import UserActualLearn from './UserActualLearn/UserActualLearn';
import BottomButtons from './BottomButtons/BottomButtons';

const Container = styled.div`

`

const BottomSection = (props) => {
    return (
        <Container>
            <UserActualLearn userAnnouncements={props.userAnnouncements} name={props.name}></UserActualLearn>
            <BottomButtons></BottomButtons>
        </Container>
    )
}

export default BottomSection;