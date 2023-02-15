import React, { Fragment } from 'react'
import { Typography, Box } from '@mui/material'
import { Pre } from '../pre'

export const ResourceCardSection = (content) => { 

  return (
    <Fragment>
      <Typography>Resource Card Section</Typography>
      <Pre>
          { JSON.stringify(content, null, 2) }
      </Pre>
    </Fragment>
  )
}