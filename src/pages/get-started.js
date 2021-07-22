import * as React from "react"
import { DefaultLayout } from "../layouts/default"
import { AboutSloganView } from '../components/typography/about-slogan'
import { AboutIntroView } from "../components/typography/about-intro"
import { DetailView } from "../components/typography/details"
import { ProductView } from "../components/typography/product"
import { FooterView } from '../views/footerView'

import '../styles/styles.css'
const GetStartedPage = () => {
    return (
        <main>
            <title>HeLx Platform</title>
            <DefaultLayout>
                <AboutSloganView />
            </DefaultLayout>
            <AboutIntroView />
            <AboutIntroView />
            <FooterView />
        </main>
    )
}

export default GetStartedPage