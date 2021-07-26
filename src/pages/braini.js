import * as React from "react"
import { HelxHeader, HelxFooter } from '../components'
import styled from "styled-components"
import AboutBkg from '../images/about-bkg.png';
import '../styles/styles.css'

const Wrapper = styled.div`
    background-image: url(${AboutBkg});
    background-size: cover;
`
const Heading = styled.h3`
    color: black;
    font-size: 50px;
    font-weight: 900;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`

const TextWrapper = styled.div`
    height: 500px;
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Text = styled.p`
    width: 70%;
    font-size: 1.3rem;
    padding: 20px;
`

const BrainiPage = () => {
    return (
        <main>
            <title>HeLx Platform</title>
            <Wrapper>
                <HelxHeader />
            </Wrapper>
            <TextWrapper>
                <Heading><b>BRAIN-I</b></Heading>
                <IntroWrapper>
                    <Text>BRAIN-I is a computational infrastructure for handling huge images combined with a discovery environment where scientists can run applications and do their analysis. It deals with big data and computation in a user-friendly way so scientists can concentrate on their science. The BRAIN-I system takes the 3D microscopy images and replicates that data onto a server at RENCI that runs the integrated Rule Oriented Data System (iRODS). Once ingested into an iRODS data grid, the data is validated, metadata tags are assigned to it and relevant inputs and processes are documented to provide an historical record of the data and its origins. </Text>
                </IntroWrapper>
            </TextWrapper>
            <HelxFooter />
        </main>
    )
}

export default BrainiPage