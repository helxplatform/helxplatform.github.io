import React from 'react'
import styled from 'styled-components'
import { funders } from '../../data/funder'


const Wrapper = styled.div`
    padding-top: 70px;
`

const Heading = styled.h2`
    font-size: 2rem;
    text-align: center;
    margin-top: 40px;
`
const ProfileContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 250px);
    gap: 40px 10px;
    justify-content: center;
    margin: 40px 10px;
`
const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 250px;
    width: 250px;
`

const ProfileImage = styled.img`
    height: 200px;
    width: 200px;
    object-fit: scale-down;
`

export const FunderView = () => {
    return (
        <Wrapper>
            <Heading>HeLx is made possible through the following funders</Heading>
            <ProfileContainer>
                {funders.map(funders => 
                <Profile>
                    <ProfileImage src={funders.logo}></ProfileImage>
                </Profile>
                )}
            </ProfileContainer>
        </Wrapper>
    )
}