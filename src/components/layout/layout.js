import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Container } from '@mui/material'
import { Header } from './header'
import { Footer } from './footer'

export const Layout = ({ children }) => {
  return (
    <Fragment>
        <Header />
      <main>
        <Container maxwidth="md">
          { children }
        </Container>
      </main>
      <Footer/>
    </Fragment>
  )
}
