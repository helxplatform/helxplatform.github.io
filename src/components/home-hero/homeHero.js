import * as React from "react"
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { StaticImage } from 'gatsby-plugin-image'


export const HomeHero = () => {
  const theme = useTheme()

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: theme.palette.branding.deepPurple,
          height: '300px',
          display: 'flex'
        }}
      >
        <Box>
          <Typography variant="h1" sx={{padding: '4rem 3rem 1rem', color: theme.palette.branding.offWhite}}>Do more with your data.</Typography>
          <Typography sx={{padding: '1rem 3rem', color: theme.palette.branding.offWhite}}>Welcome to your new collaborative analysis workspace</Typography>
        </Box>
        <Box sx={{
          alignItems: 'center',
          display: 'inline-flex',
          flexDirection: 'row',
          justifyContent: 'center',
          margin: '0 auto',
        }}>
          <StaticImage
          style={{ margin: '0 auto' }}
          src='../../images/tempHomeHeroLex.png'
          alt="HeLx Logo"
          placeholder="tracedSVG"
          layout="constrained"
          width={ 300 }
          className="brand"
        />
        </Box>
      </Box>
    </Box>    
  )
}
