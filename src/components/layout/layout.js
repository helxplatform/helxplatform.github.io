import React, { Fragment } from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const Layout = ({ children }) => {
  return (
    <Fragment>
        <Header />
      <main>
        { children }
      </main>
      <Footer />
    </Fragment>
  )
}
