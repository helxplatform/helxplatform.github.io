import * as React from "react"
import { Typography, Box } from '@mui/material'

const IndexPage = () => {
  return (
    <main>
      <Typography variant='h1'>Home Page</Typography>
      <Box sx={{border: '1px solid red', height: '300px'}}>
        <Typography variant="h2">Do more with your data</Typography>
      </Box>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
