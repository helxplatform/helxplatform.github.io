import * as React from "react"
import { Box, Typography, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { MaxWidthWrapper } from "../layout/maxWidthWrapper"
import { Link } from '../link'

export const HomeHero = ({ content }) => {
  const theme = useTheme()

  return (
    <MaxWidthWrapper backgroundColor={theme.palette.branding.deepPurple} sx={{ my: 0 }}>
      <Box
        sx={{
          height: '400px',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ 
          flex: '1 1 200px', 
          padding: '2rem 0', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between',
        }}>
          <Box>
            <Typography variant="h1" sx={{
              color: theme.palette.branding.offWhite,
              mb: '1rem',
            }}>
              {content.title}
            </Typography>
            <Typography variant="body2">
              {content.subheading}
            </Typography>
          </Box>
          <Box>
            <Button variant='filled' size='medium' component={ Link } to="/features" sx={{
              color: theme.palette.branding.deepPurple, 
              textTransform: 'none',
              backgroundColor: theme.palette.branding.yellow,
              '&:hover': {
                backgroundColor: `${ theme.palette.branding.yellow }70`,
              }
            }}>
              <Typography variant='subtitle2'>
                Why use Helx?
              </Typography>
            </Button>

          </Box>
        </Box>
        <Box sx={{
          flex: '2 2',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <img 
            src={content.image} 
            loading="lazy"
            style={{ 
              margin: '0 auto', 
              width: '400px',
              position: 'absolute',
              bottom: '-7rem',
              right: '0'
            }} 
          />
        </Box>
      </Box>

    </MaxWidthWrapper>    
  )
}
