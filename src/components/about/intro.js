import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 0px 0px 0px;
`

const DetailText = styled.p`
    width: 60%;
    font-size: 1.3rem;
`

export const IntroView = () => {
    return (
        <Wrapper><DetailText><b>HeLx is a command center for data science communities. </b>HeLx empowers researchers in domains as varied as plant genomics, biomedical science, clinical x, and neuroscience to do work with their preferred tools close to the data in the cloud at scale.</DetailText>

            <DetailText>HeLx is operated out of the Renaissance Computing Institute (RENCI) at the University of North Carolina at Chapel Hill. The platform was born from RENCI’s experience empowering diverse science communities to use advanced computing infrastructures. We learned that research communities have a wide array of data science tools in their daily toolbox, but provisioning these tools in modern cloud native environments with appropriate security, networking, and persistence support is daunting. HeLx serves as an on-ramp for these communities to assemble the right tools and to help them scale from on-premise to cloud infrastructures.</DetailText></Wrapper>
    )
}