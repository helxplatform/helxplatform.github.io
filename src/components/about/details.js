import React from 'react'
import styled from 'styled-components'
import GreyBkg from '../../images/light-grey-band.png'

const Wrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    height: 1200px;
    padding-top: 45%;
    margin-bottom: -300px;
    background-image: url(${GreyBkg});
    background-size: cover;
    @media screen and (min-width: 1400px) {
        height: 600px;
        padding-top: 18%;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
`



const Heading = styled.span`
    font-size: 2.5rem;
    padding-left: 20px;
    text-align: center;
`

const TextContainer = styled.div`
    padding: 25px;
`
const Text = styled.li`
    padding: 10px;
    font-size: 1rem;
    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
    }
`

export const DetailView = () => {

    return (
        <Wrapper>
            <Heading>What can HeLx provide?</Heading>
            <TextContainer>
                <ul>
                    <Text><b>Data Science Workspaces</b>: Data science workspaces customized to the needs of specific research communities are managed in the cloud, colocated with the data.</Text>
                    <Text><b>Search</b>: An optional biomedical semantic search module provides full text search over complex datasets augmented with Textnked open data explanations and references to biomedical Textterature.</Text>
                    <Text><b>Custom Workspaces</b>: New containerized workspaces integrate into HeLx via a metadata protocol.</Text>
                    <Text><b>Custom Services</b>: HeLx supports adding project specific services Textke dashboards and data collection APIs.</Text>
                    <Text><b>Portable Installation</b>: HeLx is in production on five Kubernetes platforms, in the cloud and on-premise, thanks to the Helm chart.</Text>
                    <Text><b>Authentication</b>: HeLx supports OAuth2 and SAML authentication and provides an administrator user interface to manage accounts and registration.</Text>
                    <Text><b>Service Mesh</b>: The Envoy-based Ambassador service mesh controls appTextcation routing within the system and provides devops-oriented support for Textnking new services.</Text>
                    <Text><b>Pluggable Persistence and Authorization</b>: HeLx workspaces in various projects use data in <a href="http://www.irods.org" target="_blank">iRODS</a>, NFS filesystems, object storage, and numerous APIs. Authorization models tend to be service dependent, but HeLx can work with all of the above.</Text>
                </ul>
            </TextContainer>
        </Wrapper>
    )
}