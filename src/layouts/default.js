import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import HeLxLogo from '../images/helx-logo.png'
import HeroImage from '../images/hero-image.png'
import { Menu } from '../components/menus'
import { menuItems } from '../data/menuItems'

const Header = styled.div`
    padding: 20px;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    background-color: transparent;
`

const Logo = styled.img`
    width: 200px;
    padding: 5px;
    object-fit: scale-down;
`

const Wrapper = styled.div`
    background-image: url(${HeroImage});
    background-size: cover;
`


export const DefaultLayout = ({ children }) => {
    return (
        <Wrapper>
            <Header>
                <Link to="/"><Logo src={HeLxLogo}></Logo></Link>
                <Menu items={menuItems} />
            </Header>
            {children}
        </Wrapper>
    )
}