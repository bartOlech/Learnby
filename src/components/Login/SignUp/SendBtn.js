import React, { useState } from 'react';
import styled from 'styled-components';
import { FontStyle } from '../../../assets/style/style';
import Loader from 'react-loader-spinner';
import firebase from '../../../Firebase.config';
import { BrowserRouter as Router, useHistory} from 'react-router-dom';

const Container = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`
const Button = styled.button`
    width: 260px;
    height: 56px;
    background-color: #4DB6AC;
    border: none;
    border-radius: 28px;
    color: #fff;
    font-family: ${FontStyle.family};
    font-size: 1.6em;
    cursor: pointer;
    outline: none;
`

const SendBtn = (props) => {
    // create the history hook
    let history = useHistory();
    
    const[loading, setLoading] = useState(false)

    const registerUser = () => {
        setLoading(true)
        firebase.register(props.email, props.password).then(() => {
            setLoading(false)
            // redirect to the homepage
            history.push("/");
        }).catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }

    return (
        <Router>
            <Container>
                {!loading ? (
                    <Button onClick={registerUser}>Zarejestruj się</Button>
                ) : (
                    <Loader
                        type="TailSpin"
                        color="#4DB6AC"
                        height={60}
                        width={60}
                    />
                )}
            </Container>    
        </Router>
    )
}

export default SendBtn;
