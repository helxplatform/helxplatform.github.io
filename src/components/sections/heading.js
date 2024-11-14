import React from 'react'
import { Typography } from '@mui/material'
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";

export const HeadingSection = ({content, backgroundColor, maxWidth, sx}) => { 

  return (
    <MaxWidthWrapper backgroundColor={backgroundColor} maxWidth={maxWidth || "sm"} sx={{
      textAlign: 'center', 
      mb: 0, 
      ...sx
    }}>
      <Typography variant='h2'>{content.title}</Typography>
      <Typography variant='subtitle1'>{content.subtitle}</Typography>
    </MaxWidthWrapper>
  )
}