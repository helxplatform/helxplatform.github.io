import React from 'react'
import { Box, Typography, Link, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import GitHubIcon from '@mui/icons-material/GitHub';
import './layout.css'

export const Footer = () => {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        background: theme.palette.branding.lightGrey,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        letterSpacing: '0.5px',
        padding: theme.spacing(2),
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 1, md: 4 }}
        sx={{padding: '2rem 0 1.5rem'}}
      >
        <Link href="https://renci.org" target="_blank" underline="hover">
          <Typography paragraph>
            &copy; { new Date().getFullYear() }  Renaissance Computing Institute
          </Typography>
        </Link>      
        <Link href="https://github.com/helxplatform" target="_blank" underline="hover" >
          <Stack
            direction="row"
            spacing={1}
          >
            <GitHubIcon size={12} />
            <Typography paragraph>HeLx Platform GitHub</Typography>
          </Stack>
        </Link>
      </Stack>
    </Box>
  )
}