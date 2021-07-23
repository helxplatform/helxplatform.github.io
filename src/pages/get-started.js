import * as React from "react"
import styled from 'styled-components'
import { HelxHeader, HelxFooter } from "../components"
import GetStartedBkg from '../images/get-started-bkg.png'

const Wrapper = styled.div`
    background-image: url(${GetStartedBkg});
    background-size: cover;
    height: 600px;
`

const Heading = styled.h1`
    padding: 150px 0;
    color: white;
    text-align: center;
    font-size: 50px;
`

const GetStartedPage = () => {
    return (
        <main>
            <title>HeLx Platform</title>
            <Wrapper>
                <HelxHeader />
                <Heading>Get Started</Heading>
            </Wrapper>
            <div>
                <h2>Reach escape velocity with HeLx today</h2>
            </div>
            <HelxFooter />
        </main>
    )
}

export default GetStartedPage