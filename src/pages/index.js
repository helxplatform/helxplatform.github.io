import * as React from "react"
import { HelxHeader, HelxFooter } from "../components"
import styled from "styled-components"
import HeroImage from '../images/hero-image.jpg'
import { SloganView } from '../components/homepage/slogan'
import { IntroView } from "../components/homepage/intro"
import { DetailView } from "../components/homepage/details"
import { ProductView } from "../components/homepage/product"
import '../styles/styles.css'

const Wrapper = styled.div`
    background-image: url(${HeroImage});
    background-size: cover;
`

const IndexPage = () => {
    return (
        <main>
            <title>HeLx Platform</title>
            <Wrapper>
                <HelxHeader />
                <SloganView />
            </Wrapper>
            <IntroView />
            <DetailView />
            <ProductView />
            <HelxFooter />
        </main>
    )
}

export default IndexPage