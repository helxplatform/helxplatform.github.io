import React from 'react'
import { Typography } from '@mui/material'
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";

export const HeadingSection = ({content}) => { 

  return (
    <MaxWidthWrapper maxWidth="sm" sx={{textAlign: 'center', mb: 0}}>
      <Typography variant='h2'>{content.title}</Typography>
      <Typography variant='subtitle1'>{content.subtitle}</Typography>
    </MaxWidthWrapper>
  )
}