import React from 'react'
import styled from 'styled-components'

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

export const AboutIntroView = () => {

    return (
        <Wrapper>
            <Heading>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet..."</Heading>
            <IntroText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</IntroText>
            <IntroText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</IntroText>
            <IntroText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</IntroText>
        </Wrapper>
    )
}