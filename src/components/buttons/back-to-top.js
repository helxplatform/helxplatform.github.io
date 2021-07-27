import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const TopButton = styled.button`
    display: none;
    position: fixed;
    width: 50px;
    bottom: 40px;
    right: 30px;
    z-index: 99;
    opacity: 0.8;
    border: none;
    outline: none;
    background-color: grey;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
    &:hover {
        opacity: 1.0;
    }
`

export const BackToTopButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);

    })

    return (
        <TopButton id="backToTop" style={{ display: visible ? 'block' : 'none' }} onClick={scrollToTop}><FontAwesomeIcon icon={faArrowUp} /></TopButton>
    )
}