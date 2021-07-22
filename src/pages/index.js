import * as React from "react"
import { DefaultLayout } from "../layouts/default"
import { SloganView } from '../components/typography/slogan'
import { IntroView } from "../components/typography/intro"
import { DetailView } from "../components/typography/details"
import { ProductView } from "../components/typography/product"
import { FooterView } from '../views/footerView'
import '../styles/styles.css'

const IndexPage = () => {
    return (
        <main>
            <title>HeLx Platform</title>
            <DefaultLayout>
                <SloganView />
            </DefaultLayout>
            <IntroView />
            <DetailView />
            <ProductView />
            <FooterView />
        </main>
    )
}

export default IndexPage