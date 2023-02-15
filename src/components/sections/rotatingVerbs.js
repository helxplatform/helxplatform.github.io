import React, { Fragment } from 'react'
import { Typography, Box } from '@mui/material'
import { Pre } from '../pre'

export const RotatingVerbs = (content) => { 

  return (
    <Fragment>
      <Typography>Rotating Verb Section</Typography>
      <Pre>
          { JSON.stringify(content, null, 2) }
      </Pre>
    </Fragment>
  )
}