import React from 'react';
import styled from 'styled-components';
import UserActualLearn from './UserActualLearn/UserActualLearn';
import BottomButtons from './BottomButtons/BottomButtons';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BottomSection = (props) => {
    return (
        <Container>
            {console.log(props.userAnnouncements)}
            <UserActualLearn userAnnouncements={props.userAnnouncements} name={props.name}></UserActualLearn>
            <BottomButtons></BottomButtons>
        </Container>
    )
}

export default BottomSection;