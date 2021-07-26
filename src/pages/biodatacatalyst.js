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
    color: #c12f42;
    font-size: 50px;
    font-weight: 900;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`

const TextWrapper = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const IntroWrapper = styled.div`
    display: grid;
    @media screen and (min-width: 992px) {
        display: flex;
        margin: 20px;
        justify-content: space-around;
    }
`

const Text = styled.p`
    width: 50%;
    font-size: 1.3rem;
    padding: 20px;
`

const BioDataCatalystPage = () => {
    return (
        <main>
            <title>HeLx Platform</title>
            <Wrapper>
                <HelxHeader />
            </Wrapper>
            <TextWrapper>
                <Heading><b>BioData Catalyst</b></Heading>
                <IntroWrapper>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/gly4x_k3F24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <Text>The consortium’s semantic search is powered by HeLx. It has indexed TOPMed phenotypic concepts and dbGaP study variables for all studies in BioData Catalyst. The full text search also uses ontologies and controlled vocabularies to discover connections between elements of data sets, performing a form of automated curation.</Text>
                </IntroWrapper>
            </TextWrapper>
            <HelxFooter />
        </main>
    )
}

export default BioDataCatalystPage