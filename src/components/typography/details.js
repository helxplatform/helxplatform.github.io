import React from 'react'
import styled from 'styled-components'
import PurpleBkg from '../../images/purple-band.png'
import { detailText } from '../../data/detailText'

const Wrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 100px;
    background-image: url(${PurpleBkg});
    background-position: 10300px 4200px;
`

const DetailInfoContainer = styled.div`
    padding: 10px;
    max-width: 800px;
    margin-top: 50px;
    @media screen and (min-width: 992px) {
        margin-left: ${ props => props.position === 'right' ? '50%' : '5%'}
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
            {detailText.map(detail => <DetailInfoContainer position={detail.position}><DetailTitle><b>{detail.title}</b></DetailTitle><ul>{detail.texts.map(text => <DetailItem>{text}</DetailItem>)}</ul></DetailInfoContainer>)}
        </Wrapper>
    )
}