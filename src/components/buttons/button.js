import styled from 'styled-components'

export const Button = styled.button(() => `
    width: auto;    
    border-radius: 4px;
    display: inline-block;
    border-width: 1px;
    border-style: solid;
    color: #36688B;
    background-color: white;
    border-color: #36688B;
    padding: 20px 50px;
    font-size: 2rem;
    text-transform: uppercase;
    text-decoration: none !important;
    white-space: nowrap;
    cursor: pointer;
    position: relative;
    transition: filter 250ms;
    text-decoration: none;
    &:hover, &:focus {
        filter: brightness(1.2);
        color: white;
        background-color: #36688B;
    }
`)