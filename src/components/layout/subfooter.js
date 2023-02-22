import React, { Fragment } from 'react'
import { Box, Typography, Stack, Button, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import './layout.css'

export const Subfooter = () => {
  const theme = useTheme()

  return (
    <Container maxWidth="md">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 1, md: 2 }}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginY: '2rem',
        }}
      >
        <Box sx={{
          flex: '4'
        }}>
          <Typography variant='h3'>
            Have more questions about HeLx? Check out our documentation or reach out to the team to learn more.
          </Typography>
        </Box>
        <Box sx={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Button variant="outlined">
            Contact Us
          </Button>
        </Box>
      </Stack>
    </Container>
  )
}