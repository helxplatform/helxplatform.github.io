import React, { Fragment } from 'react'
import { Typography, Box } from '@mui/material'
import { Pre } from '../pre'

export const Hero = (content) => {

  return (
    <Fragment>
      <Typography>Hero Section</Typography>
      <Pre>
          { JSON.stringify(content, null, 2) }
      </Pre>

    </Fragment>
  )
}