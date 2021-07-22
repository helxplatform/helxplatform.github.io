import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import { footerText } from '../../data/footerText'
import { Button } from '../buttons/button'
import BDCLogo from '../../images/bdc.png';
import BrainiLogo from '../../images/braini.png'
import ReCCAP from '../../images/reccap.png'
import Scidas from '../../images/scidas.png'

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
                <Product style={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}><ProductLogo src={BDCLogo} /><ProductText>The consortium's semantic search is powered by HeLx. It has indexed TOPMed phenotypic concepts and dbGaP study variable for all studies in BDC.</ProductText></Product>
                <Product style={{ borderLeft: '1px solid black', borderBottom: '1px solid black' }}><ProductLogo src={BrainiLogo} /><ProductText>The system takes full advantage of the cloud dynamically scaling costly GPU resrouces according to demand.</ProductText></Product>
                <Product style={{ borderRight: '1px solid black', borderTop: '1px solid black' }}><ProductLogo src={ReCCAP} /><ProductText>The consortium's semantic search is powered by HeLx. It has indexed TOPMed phenotypic concepts and dbGaP study variable for all studies in BDC.</ProductText></Product>
                <Product style={{ borderLeft: '1px solid black', borderTop: '1px solid black' }}><ProductLogo src={Scidas} /><ProductText>The system takes full advantage of the cloud dynamically scaling costly GPU resrouces according to demand.</ProductText></Product>
                {/* {footerText.map(product => <Product key={product.key}><ProductLogo src={BDCLogo} /><ProductText>{product.text}</ProductText></Product>)} */}
            </ProductGrid>
            <ButtonContainer>
                <Button><b>Get Started!</b></Button>
            </ButtonContainer>
        </Wrapper>
    )
}