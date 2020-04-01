import React from 'react';
import styled from 'styled-components';
import moreIco from '../../../assets/img/Mobile/moreDots.svg';
import { FontStyle } from '../../../assets/style/style';
import Loader from 'react-loader-spinner';

const HeaderBox = styled.div`
    width: 100%;
    height: 100px;
    background-color: #33BFAC;
    display: flex;
    justify-content: space-between;
    margin-bottom: -25px;
    @media(min-width: 1100px) {
        display: none;
    }
`
const Image = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    background-image: url(${[props => props.image]});
    background-repeat: no-repeat;
    background-size: 45px 45px;
    margin-top: 25px;
    margin-left: 15px;
    box-shadow:
    0 0px 1.3px rgba(0, 0, 0, 0.073),
    0 0px 2px rgba(0, 0, 0, 0.107),
    0 0px 2px rgba(0, 0, 0, 0.18)
    ;
`
const Name = styled.span`
    font-family: ${FontStyle.family};
    font-size: 1.5em;
    color: ${FontStyle.color};
    text-align: center;
    margin-top: 32px;
`
const ButtonIco = styled.div`
    width: 35px;
    height: 35px;
    background-image: url(${moreIco});
    background-repeat: no-repeat;
    background-size: 35px 35px;
    margin-top: 32px;
    margin-right: 15px;
    cursor: pointer;
`
const LoaderBox = styled.div`
    margin: -45px 0 0 45px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = (props) => {
    return (
        <HeaderBox>
            {props.image ? (
                <Image data-testid='image' image={props.image}></Image>
            ) : (
                <LoaderBox>
                    <Loader
                        type="TailSpin"
                        color="#262F3F"
                        height={30}
                        width={30}
                        style={{marginTop: '50px', marginLeft: '-20px'}}
                    />
                </LoaderBox>
            )}
            <Name>{props.name}</Name>
            <ButtonIco></ButtonIco>
        </HeaderBox>
    )
}

export default Header;