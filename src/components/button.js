import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from './link'
import { Typography, Button as MUIButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'



export const Button = ({to, color, children, ...props}) => {
  const theme = useTheme();

  return (
    <MUIButton
    to={to}
    variant="contained"
    size="medium"
    color={ color }
    sx={{
      textTransform: "none",
      padding: "0.5rem 2rem"
    }}
    {...props}
  >
    <Typography variant="body2">
      {children}
    </Typography>
  </MUIButton>

  )
}