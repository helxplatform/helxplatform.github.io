import React from 'react'
import styled from 'styled-components'
import PurpleBkg from '../../images/purple-bkg.png'
import { detailText } from '../../data/detailText'

const Wrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 100px;
    background-image: url(${PurpleBkg});
    background-size: cover;
`

const DetailInfoContainer = styled.div`
    padding: 10px;
    margin: 50px;
    margin-left: ${ props => props.position === 'left' ? '0px' : '500px'}
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