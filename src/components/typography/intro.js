import React from 'react'
import styled from 'styled-components'
import { introText } from '../../data/introText'

const Wrapper = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
            <Heading>{introText.general}</Heading>
            <ul>
                {introText.texts.map(text => <IntroText>{text}</IntroText>)}
            </ul>
        </Wrapper>
    )
}