import React, { Fragment } from 'react'
import { Typography, Container } from '@mui/material'
import { Pre } from '../pre'

export const HeadingSection = ({content}) => { 

  return (
    <Fragment>
      <Container maxWidth="sm" sx={{ textAlign: 'center', marginY: '2rem'}}>
        <Typography variant='h2' sx={{marginX:"2rem"}}>{content.title}</Typography>
        <Typography variant='caption'>{content.subtitle}</Typography>
      </Container>
    </Fragment>
  )
}