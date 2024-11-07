import React from 'react'
import { Typography } from '@mui/material'
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";
import { useTheme } from "@emotion/react";

export const HeadingSection = ({content, backgroundColor, sx}) => { 
  const theme = useTheme();

  return (
    <MaxWidthWrapper backgroundColor={backgroundColor} maxWidth="sm" sx={{
      textAlign: 'center', 
      mb: 0, 
      mt: 6,
      [theme.breakpoints.down('md')]: { mt: 4 } ,
      ...sx
    }}>
      <Typography variant='h2'>{content.title}</Typography>
      <Typography variant='subtitle1'>{content.subtitle}</Typography>
    </MaxWidthWrapper>
  )
}