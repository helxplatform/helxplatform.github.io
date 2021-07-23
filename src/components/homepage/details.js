import React from 'react'
import styled from 'styled-components'
import PurpleBkg from '../../images/purple-band.jpg'
import { detailText } from '../../data/detailText'

const Wrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 10%;
    background-image: url(${PurpleBkg});
    background-position: 10300px 4200px;
`

const DetailInfoContainer = styled.div`
    padding: 10px;
    max-width: 800px;
    margin-top: 50px;
    @media screen and (min-width: 992px) {
        margin-left: ${props => props.position === 'right' ? '50%' : '5%'}
    }
`

const DetailTitle = styled.span`
    color: #ffff00;
    font-size: 2rem;
`

const DetailItem = styled.li`
    padding: 5px;
    color: white;

`

export const DetailView = () => {

    return (
        <Wrapper>
            <DetailInfoContainer position="left">
                <DetailTitle><b>Implement tools and solutions to explore your data</b></DetailTitle>
                <ul>
                    <DetailItem>Existing applications include notebooks, imaging, Apache Spark, and Nextflow workflows.</DetailItem>
                    <DetailItem>Includes intuitive full text driven, knowledge graph augmented semantic search.</DetailItem>
                    <DetailItem>Open source technology supports multiple authentication providers and authorization models.</DetailItem>
                    <DetailItem>Scalable cloud native architecture with Kubernetes, Apache Airflow, and Nextflow.</DetailItem>
                </ul>
            </DetailInfoContainer>
            <DetailInfoContainer position="right">
                <DetailTitle><b>Launch a flexible workspace for any science domain</b></DetailTitle>
                <ul>
                    <DetailItem>Provides a unified data science workbench tailored to each science community.</DetailItem>
                    <DetailItem>Extensible metadata driven architecture simplifies adding data science workspaces.</DetailItem>
                    <DetailItem>Applicable to and actively used across science domains.</DetailItem>
                </ul>
            </DetailInfoContainer>
        </Wrapper>
    )
}