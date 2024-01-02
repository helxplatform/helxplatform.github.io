import React from 'react'
import { Box, Typography, Stack, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import './layout.css'
import { Link } from "../link"
import { Button } from "../button"

export const Subfooter = () => {
  const theme = useTheme()

  return (
    <Container>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 3, md: 4 }}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginY: '4rem',
        }}
      >
        <Box sx={{
          flex: '3'
        }}>
          <Typography variant='h3'>
            Have more questions about HeLx? Reach out to the team to learn more.
          </Typography>
        </Box>
        <Box sx={{
          flex: '1',
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
        <Button
          component={Link}
          to='/contact'
          color="secondary"
        >
            Contact Us
        </Button>
        </Box>
      </Stack>
    </Container>
  )
}