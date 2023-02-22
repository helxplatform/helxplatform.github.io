import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Container } from '@mui/material'
import { Header } from './header'
import { Footer } from './footer'
import { Subfooter } from './subfooter'

export const Layout = ({ children }) => {
  return (
    <Fragment>
        <Header />
      <main>
        <Container maxWidth="lg">
          { children }
        </Container>
      </main>
      <Subfooter />
      <Footer />
    </Fragment>
  )
}
