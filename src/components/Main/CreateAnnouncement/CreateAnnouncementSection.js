import React from 'react';
import styled from 'styled-components';
import Logo from '../../Header/Logo';
import ProgressBar from './ProgressBar';
import FormLayout1 from './FormLayout/FormLayout1/FormLayout1';
import FormLayout2 from './FormLayout/FormLayout2/FormLayout2';
import FormLayout3 from './FormLayout/FormLayout3/FormLayout3';
import FormLayout4 from './FormLayout/FormLayout4/FormLayout4';
import { FindAnnouncementConsumer } from '../../../context/CurrentUser.context';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const CreateAnnouncementSection = () => {
    return (
        <FindAnnouncementConsumer>
            {({ addAnnouncementLayoutNumeber }) => (
                <Container>
                    <Logo></Logo>
                    <ProgressBar layoutNumber={addAnnouncementLayoutNumeber}></ProgressBar>
                    {addAnnouncementLayoutNumeber === 0 ? <FormLayout1></FormLayout1> : null}
                    {addAnnouncementLayoutNumeber === 1 ? <FormLayout2></FormLayout2> : null}
                    {addAnnouncementLayoutNumeber === 2 ? <FormLayout3></FormLayout3> : null}
                    {addAnnouncementLayoutNumeber === 3 ? <FormLayout4></FormLayout4> : null}
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default CreateAnnouncementSection;