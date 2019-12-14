import React, { useState } from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';
import ProgressCircleText from './ProgressCircleText';
import { FindAnnouncementConsumer } from '../../../../../context/CurrentUser.context';

const Container = styled.div`
    width: 80%;
    max-width: 300px;
    height: 100px;
    display: flex;
    justify-content: center;
`
const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #262F3F;
    cursor: pointer;
    margin-left: 5px;
    margin-right: 5px;
`
const CircleFull = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #262F3F;
    background-color: #262F3F;
    cursor: pointer;
    margin-left: 5px;
    margin-right: 5px;
`
const ProgressCircles = () => {
    const[rateText, setRateText] = useState('Średni')
    const[rate, setRate] = useState(3)

    const setSelectedRate = (rate) => {
        if(rate === 1) {
            setRateText('Brak wiedzy')
            setRate(1)
        } else if(rate === 2) {
            setRateText('Wiedza podstawowa') 
            setRate(2)
        }
        else if(rate === 3) {
            setRateText('Średnia wiedza') 
            setRate(3)
        }
        else if(rate === 4) {
            setRateText('Dobra wiedza') 
            setRate(4)
        }
        else if(rate === 5) {
            setRateText('Bardzo dobra wiedza') 
            setRate(5)
        }
    }

    return (
        <FindAnnouncementConsumer>
            {({ addAnnouncementData, setAnnouncementData }) => (
                <Container>
                    <div>
                        <Rating
                            emptySymbol={<Circle/>}
                            fullSymbol={<CircleFull/>}
                            initialRating={addAnnouncementData.levelOfKnowledge}
                            onChange={(rate) => {
                                setSelectedRate(rate);
                                setAnnouncementData('levelOfKnowledge', rate)
                            }}
                        />
                        <ProgressCircleText
                            textOfLevel={rateText}
                        ></ProgressCircleText>
                    </div>
                </Container>
            )}
        </FindAnnouncementConsumer>
    )
}

export default ProgressCircles;