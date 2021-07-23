import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import { footerText } from '../../data/footerText'
import { Button } from '../buttons/button'
import BDCLogo from '../../images/bdc.jpg';
import BrainiLogo from '../../images/braini.jpg'
import ReCCAP from '../../images/reccap.png'
import Scidas from '../../images/scidas.jpg'

const Wrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 80px;
`

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    padding: 100px;
`

const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
`

const ProductLogo = styled.img`
    object-fit: scale-down;
    height: 50px;
`
const ProductText = styled.div`
    font-size: 14px;
    width: 50%;
    margin: 10px;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const ProductView = () => {

    return (
        <Wrapper>
            <ProductGrid>
                <Product style={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}><ProductLogo src={BDCLogo} /><ProductText>The consortium’s semantic search is powered by HeLx. It has indexed TOPMed phenotypic concepts and dbGaP study variables for all studies in BioData Catalyst. The full text search also uses ontologies and controlled vocabularies to discover connections between elements of data sets, performing a form of automated curation.</ProductText></Product>
                <Product style={{ borderLeft: '1px solid black', borderBottom: '1px solid black' }}><ProductLogo src={Scidas} /><ProductText>For Scientific Discovery at Scale (SciDAS), HeLx executes the Nextflow workflow engine as an app in Kubernetes to drive highly parallel, GPU intensive workflows in Kubernetes. The system takes full advantage of the cloud by dynamically scaling costly GPU resources according to demand. </ProductText></Product>
                <Product style={{ borderRight: '1px solid black', borderTop: '1px solid black' }}><ProductLogo src={ReCCAP} /><ProductText>Blackbalsam is an open source data science environment with an initial focus on COVID-19 and North Carolina. Blackbalsam's interface uses a Jupyter notebook environment featuring artificial intelligence, visualization, and scalable computing capabilities. </ProductText></Product>
                <Product style={{ borderLeft: '1px solid black', borderTop: '1px solid black' }}><ProductLogo src={Scidas} /><ProductText>BRAIN-I is a computational infrastructure for handling huge images combined with a discovery environment where scientists can run applications and do their analysis. It deals with big data and computation in a user-friendly way so scientists can concentrate on their science. </ProductText></Product>
            </ProductGrid>
            <ButtonContainer>
                <Button><b>Get Started!</b></Button>
            </ButtonContainer>
        </Wrapper>
    )
}