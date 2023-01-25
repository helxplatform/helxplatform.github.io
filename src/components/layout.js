import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Container } from '@mui/material'

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <main>
        <Container maxwidth="md">
          { children }
        </Container>
      </main>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}