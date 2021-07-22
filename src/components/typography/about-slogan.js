import React from 'react'
import styled from 'styled-components'

const Heading = styled.h3`
    color: white;
    font-size: 3rem;
`

const Wrapper = styled.div`
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AboutSloganView = () => {
    return (
        <Wrapper>
            <Heading>Lorem Ipsum</Heading>
        </Wrapper>
    )
}