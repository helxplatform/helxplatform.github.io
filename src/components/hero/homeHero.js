import * as React from "react"
import { Box, Typography, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { StaticImage } from 'gatsby-plugin-image'
import { MaxWidthWrapper } from "../layout/maxWidthWrapper"

export const HomeHero = ({ content }) => {
  const theme = useTheme()

  return (
    <MaxWidthWrapper backgroundColor={theme.palette.branding.deepPurple}>
      <Box
        sx={{
          height: '400px',
          display: 'flex'
        }}
      >
        <Box sx={{width: '400px', padding: '4rem 3rem 1rem'}}>
          <Typography variant="h1" sx={{color: theme.palette.branding.offWhite}}>{content.title}</Typography>
          <Typography variant="body2">
            {content.subheading}
          </Typography>
          <Button variant='filled' size='medium' sx={{
            color: theme.palette.branding.deepPurple, 
            textTransform: 'none',
            backgroundColor: theme.palette.branding.yellow,
          }}>
            Why use Helx?
          </Button>
        </Box>
        <Box sx={{
          alignItems: 'center',
          display: 'inline-flex',
          flexDirection: 'row',
          justifyContent: 'center',
          margin: '0 auto',
          paddingTop: '7rem',
          overflow: 'hidden',
        }}>
          <img src={content.image} style={{ margin: '0 auto', width: 400 }} loading="lazy" />
        </Box>
      </Box>
    </MaxWidthWrapper>    
  )
}
