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
                    {introText.texts.map(text => <IntroText>{text}</IntroText>)}
                </ul>
            </div>
            <iframe width="420" height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
        </Wrapper>
    )
}