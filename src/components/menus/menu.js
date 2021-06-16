import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const MenuContainer = styled.nav`
    flex: 1;
    margin: 10px;
    display: flex;
    max-width: 1080px;
    height: 40px;
    justify-content: space-around;
    background-color: transparent;
`

export const MenuItem = styled(Link)`
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    font-size: 18px;
    &:hover, &:focus {
        border-bottom: 3px solid #3ABF9D;
        color: #3ABF9D;
    }
`

export const Menu = ({ items }) => {
    return (
        <MenuContainer>
            {
                items.map((item, index) =>
                    <MenuItem key={item.key} to={item.path}>
                        {item.text}
                    </MenuItem>
                )
            }
        </MenuContainer>
    )
}