import React, { Fragment } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { Subfooter } from './subfooter'

export const Layout = ({ children }) => {
  return (
    <Fragment>
        <Header />
      <main>
        { children }
      </main>
      <Subfooter />
      <Footer />
    </Fragment>
  )
}
