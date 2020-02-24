import React from 'react';
import styled from 'styled-components';
import Template from './Template';
import TextTemplate from './TextTemplate'
// image
import TemplateImage1 from '../../../../../assets/img/Desktop/Templates-desktop/LearnBy-template-1.svg';
import TemplateImage2 from '../../../../../assets/img/Desktop/Templates-desktop/LearnBy-template-2.svg';
import TemplateImage3 from '../../../../../assets/img/Desktop/Templates-desktop/LearnBy-template-3.svg';
import Media from 'react-media';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Box = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 1035px) {
        flex-direction: column;
        align-items: center;
    }
`

const TemplateBox = () => {
    return (
        <Container>
            {/* Desktop */}
            <Media query="(min-width: 1035px)" render={() =>
                (
                    <React.Fragment>
                        <Box style={{marginRight: '100px'}}>
                            <Template image={TemplateImage1}></Template>
                            <TextTemplate
                                MainText='Poznawaj osoby'
                                ExtraText='Zapoznaj osoby, z którymi będziesz mógł rozwijać swoje zainteresowania Zapoznaj osoby, z którymi będziesz mógł rozwijać swoje zainteresowania'
                            ></TextTemplate>
                        </Box>
                        <Box style={{marginRight: '-300px'}}>
                            <TextTemplate
                                MainText='Ucz się efektywniej'
                                ExtraText='Twoja efektywność zauważalnie wzrasta, gdy uczyś się w parach lub gronie osób  Twoja efektywność zauważalnie wzrasta, gdy uczyś się w parach lub gronie osób'
                            ></TextTemplate>
                            <Template image={TemplateImage2}></Template>
                        </Box>
                        <Box style={{marginRight: '100px'}}>
                            <Template image={TemplateImage3}></Template>
                            <TextTemplate
                                MainText='Dziel i wymieniaj się wiedzą'
                                ExtraText='Podczas nauki z innymi wiedzę możemy uczyć się nawet kilka razy szybciej gdyż każda z osób wniesie swoją wiedzę w danej dziedzinie  Podczas nauki z innymi wiedzę możemy uczyć się nawet kilka razy szybciej '
                            ></TextTemplate>
                        </Box>
                    </React.Fragment>
                )}
            />
            {/* Phone */}
            <Media query="(max-width: 1035px)" render={() =>
                (
                    <React.Fragment>
                        <Box>
                            <TextTemplate
                                MainText='Poznawaj osoby'
                                ExtraText='Zapoznaj osoby, z którymi będziesz mógł rozwijać swoje zainteresowania Zapoznaj osoby, z którymi będziesz mógł rozwijać swoje zainteresowania'
                            ></TextTemplate>
                            <Template image={TemplateImage1}></Template>
                        </Box>
                        <Box>
                            <TextTemplate
                                MainText='Ucz się efektywniej'
                                ExtraText='Twoja efektywność zauważalnie wzrasta, gdy uczyś się w parach lub gronie osób  Twoja efektywność zauważalnie wzrasta, gdy uczyś się w parach lub gronie osób'
                            ></TextTemplate>
                            <Template image={TemplateImage2}></Template>
                        </Box>
                        <Box>
                            <TextTemplate
                                MainText='Dziel i wymieniaj się wiedzą'
                                ExtraText='Podczas nauki z innymi wiedzę możemy uczyć się nawet kilka razy szybciej gdyż każda z osób wniesie swoją wiedzę w danej dziedzinie  Podczas nauki z innymi wiedzę możemy uczyć się nawet kilka razy szybciej '
                            ></TextTemplate>
                            <Template image={TemplateImage3}></Template>
                        </Box>
                    </React.Fragment>
                )}
            />
        </Container>
    )
}

export default TemplateBox;