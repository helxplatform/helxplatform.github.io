import React, { Fragment } from 'react'
import { Typography, Box } from '@mui/material'
import { Pre } from '../pre'

export const FaqsSection = (content) => { 

  return (
    <Fragment>
      <Typography>FAQ Section</Typography>
      <Pre>
          { JSON.stringify(content, null, 2) }
      </Pre>
    </Fragment>
  )
}