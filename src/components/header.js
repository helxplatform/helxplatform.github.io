import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import HeLxLogo from '../images/helx-logo.png'
import { Menu } from './menus'
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

export const HelxHeader = () => {
    return (
        <Header>
            <Link to="/"><Logo src={HeLxLogo}></Logo></Link>
            <Menu items={menuItems} />
        </Header>
    )
}