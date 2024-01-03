import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Layout } from './src/components/layout'
import { theme } from './src/theme'

export const wrapRootElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={ theme }>
      { element }
    </ThemeProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout>
      { element }
    </Layout>
  )
}