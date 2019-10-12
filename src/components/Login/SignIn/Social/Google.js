import React from 'react';
import styled from 'styled-components';
import GoogleIco from '../../../../assets/img/Mobile/search.svg';
import { CurrentUserConsumer } from '../../../../context/CurrentUser.context';
import { BrowserRouter as Router, useHistory} from 'react-router-dom';

const Container = styled.div`
    width: 60px;
    height: 60px;
    margin-left: 20px;
`
const Button = styled.div`
    width: 60px;
    height: 60px;
    background-image: url(${GoogleIco});
    background-repeat: no-repeat;
    background-size: 60px 60px;
    cursor: pointer;
`

const Google = () => {
    // create the history hook
    let history = useHistory();

    const redirect = () => {
        // redirect to the homepage
        history.push("/");
    }

    return (
        <Router>
            <Container>
                <CurrentUserConsumer>
                    {({loginWithGoogle}) => (
                        <Button onClick={() => {
                            loginWithGoogle();
                            redirect()
                        }}></Button> 
                    )}
                </CurrentUserConsumer>
            </Container>
        </Router>
    )
}

export default Google;