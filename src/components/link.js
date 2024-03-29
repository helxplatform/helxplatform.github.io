import * as React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { Link as MUILink } from '@mui/material'

const ExternalLink = ({ to, children, ...props }) => {
  return (
    <MUILink
      href={ to }
      target="_blank"
      rel="noopener noreferrer"
      underline="hover"
      sx={{ textDecoration: "none" }}
      >{ children }</MUILink>
  )
}

const InternalLink = ({ to, children, ...props }) => {
  return (
    <MUILink
      component={ GatsbyLink }
      to={ to } 
      underline="hover"
      { ...props } 
      sx={{ textDecoration: 'none' }}
    >
      {children}
    </MUILink>
  )
}

export const Link = ({ to, children, ...props }) => {
  const mailtoPattern = new RegExp(/^mailto:/)
  const mailtoMatch = mailtoPattern.exec(to)

  const externalUrlPattern = new RegExp(/^https?:\/\//)
  const externalUrlMatch = externalUrlPattern.exec(to)
  
  const LinkComponent = externalUrlMatch || mailtoMatch ? ExternalLink : InternalLink
  
  return <LinkComponent to={ to } { ...props }>{ children }</LinkComponent>
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

ExternalLink.propTypes = Link.propTypes