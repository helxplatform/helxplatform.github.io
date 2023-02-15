import React, { Fragment } from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import './layout.css'

export const Subfooter = () => {
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
          Sticky Sub Footer
        </Typography>
      </Box>
    </Fragment>
  )
}