import React, { Fragment } from 'react'
import { Typography, Box } from '@mui/material'
import { Pre } from '../pre'

export const FeaturesSection = (content) => { 

  return (
    <Fragment>
      <Typography>Home Features Section</Typography>
      <Pre>
          { JSON.stringify(content, null, 2) }
      </Pre>
    </Fragment>
  )
}