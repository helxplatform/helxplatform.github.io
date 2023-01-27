import React, { Fragment } from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import './layout.css'

export const Footer = () => {
  const theme = useTheme()

  return (
    <Fragment>
      <Box
        component="footer"
        sx={{
          background: theme.palette.branding.offWhite,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          letterSpacing: '0.5px',
          padding: theme.spacing(2),
        }}
      >
        <Typography paragraph align="center">
          &copy; { new Date().getFullYear() } RENCI; Research Triangle Biohub &mdash; a proposed CZ Network Biohub.
        </Typography>
        <Typography variant="caption" align="center" color="#aaa" sx={{ fontStyle: 'italic' }}>
          Some images created with BioRender.com
        </Typography>
      </Box>
    </Fragment>
  )
}