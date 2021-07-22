import React from 'react'
import styled from 'styled-components'
import LowerGreyBand from '../images/lower-grey-band.png'

const FooterWrapper = styled.div`
    height: 500px;
    background-image: url(${LowerGreyBand});
    background-position: 15500px 3900px;
`

const FooterTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 200px 0 0 15%;
    color: white;
`

const FooterText = styled.div`
    margin: 5px;
`

export const FooterView = () => {
    return (
        <FooterWrapper>
            <FooterTextContainer>
                <FooterText>Contact</FooterText>
                <FooterText>Social Media</FooterText>
                <FooterText>Press</FooterText>
            </FooterTextContainer>
        </FooterWrapper>
    )
}