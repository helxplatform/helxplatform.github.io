import React from 'react'
import styled from 'styled-components'
import { team } from '../../data/team'


const Wrapper = styled.div`
    padding-top: 20px;
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
const Profile = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 250px;
    text-decoration: none;
    color: inherit;
`

const ProfileImage = styled.img`
    height: 150px;
    width: 150px;
    object-fit: scale-down;
`

const ProfileText = styled.div`
    text-align: center;
    padding: 15px;
`

export const TeamView = () => {
    return (
        <Wrapper>
            <Heading>Meet our Core Team</Heading>
            <ProfileContainer>
                {team.map(member => 
                <Profile href={member.link} target="_blank">
                    <ProfileText>{member.name}</ProfileText>
                    <ProfileImage src={member.headshot_url}></ProfileImage>
                </Profile>
                )}
            </ProfileContainer>
        </Wrapper>
    )
}