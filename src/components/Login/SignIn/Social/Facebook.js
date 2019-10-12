import React from 'react';
import styled from 'styled-components';
import FacebookIco from '../../../../assets/img/Mobile/facebook1.svg';
import { CurrentUserConsumer } from '../../../../context/CurrentUser.context';
import { BrowserRouter as Router, useHistory} from 'react-router-dom';

const Container = styled.div`
    width: 60px;
    height: 60px;
    margin-right: 20px;
`
const Button = styled.div`
    width: 60px;
    height: 60px;
    background-image: url(${FacebookIco});
    background-repeat: no-repeat;
    background-size: 60px 60px;
    cursor: pointer;
`

const Facebook = () => {
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
                    {({loginWithFacebook}) => (
                        <Button onClick={() => {
                            loginWithFacebook();
                            redirect()
                        }}></Button> 
                    )}
                </CurrentUserConsumer>
            </Container>
        </Router>  
    )
}

export default Facebook;