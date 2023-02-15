import React, { Fragment } from 'react'
import { Typography, Box } from '@mui/material'
import { Pre } from '../pre'

export const InstitutionList = (content) => { 

  return (
    <Fragment>
      <Typography>Institution List Section</Typography>
      <Pre>
          { JSON.stringify(content, null, 2) }
      </Pre>
    </Fragment>
  )
}