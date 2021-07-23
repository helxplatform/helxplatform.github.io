import React from 'react'
import styled from 'styled-components'
import { introText } from '../../data/introText'

const Wrapper = styled.div`
    height: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const Heading = styled.h3`
    color: #662d91;
    font-size: 2rem;
`

const IntroText = styled.li`
    padding: 5px;
`


export const IntroView = () => {

    return (
        <Wrapper>
            <div>
                <Heading>{introText.general}</Heading>
                <ul>
                    <IntroText>Provides a <b>complete data science laboratory</b> for research in the cloud.</IntroText>
                    <IntroText>Solves technical infrastructure challenges to <b>focus researchers on science.</b></IntroText>
                    <IntroText><b>Brings the right tools for each team together</b> in a secure, scalable portal.</IntroText>
                    <IntroText>Includes <b>bring your own data</b> access patterns.</IntroText>
                </ul>
            </div>
        </Wrapper>
    )
}