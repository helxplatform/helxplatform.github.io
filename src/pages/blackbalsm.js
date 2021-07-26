import * as React from "react"
import { HelxHeader, HelxFooter } from '../components'
import styled from "styled-components"
import AboutBkg from '../images/about-bkg-2.png';
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

const BlackbalsamPage = () => {
    return (
        <main>
            <title>HeLx Platform</title>
            <Wrapper>
                <HelxHeader />
            </Wrapper>
            <TextWrapper>
                <Heading><b>Blackbalsam</b></Heading>
                <IntroWrapper>
                    <Text>Blackbalsam is an open source data science environment with an initial focus on COVID-19 and North Carolina. Blackbalsam's interface uses a Jupyter notebook environment featuring artificial intelligence, visualization, and scalable computing capabilities. For computation, integration of the Jupyter environment with Apache Spark and Kubernetes allows users to dynamically create personal Spark clusters with user-specified attributes.</Text>
                    <Text>The environment has been used to  provide access to COVID-19 data sets in a HeLx deployment at the University of North Carolina at Chapel Hill in an on premise cluster. Blackbalsam is open source under the MIT License.</Text>
                </IntroWrapper>
            </TextWrapper>
            <HelxFooter />
        </main>
    )
}

export default BlackbalsamPage