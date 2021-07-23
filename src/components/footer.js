import React from 'react'
import styled from 'styled-components'
import FooterBkg from '../images/footer-bkg.png'

const FooterWrapper = styled.div`
    height: 800px;
    background-image: url(${FooterBkg});
    background-size: cover;
`

const FooterTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 500px 0 0 80px;
    color: white;
`

const FooterText = styled.div`
    margin: 5px;
`

export const HelxFooter = () => {
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