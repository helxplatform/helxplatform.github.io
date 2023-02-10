import React, { Fragment } from 'react'
import { Typography, Box } from '@mui/material'
import { Pre } from '../pre'

export const IllustrationTextSection = (content) => { 

  return (
    <Fragment>
      <Typography>Home Illustration-Text Section</Typography>
      <Pre>
          { JSON.stringify(content, null, 2) }
      </Pre>
    </Fragment>
  )
}