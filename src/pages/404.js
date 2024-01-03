import * as React from "react"
import { Link } from "gatsby"
import { Brand } from "../components/layout/header"
import { MaxWidthWrapper } from "../components/layout/maxWidthWrapper"
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StaticImage } from 'gatsby-plugin-image'

const NotFoundPage = () => {
  const theme = useTheme();

  
  return (
    <main >
      <MaxWidthWrapper 
            backgroundImage='linear-gradient(230deg, )'
            sx={{ my: 0, position: "relative", py: "2rem", overflow: "hidden" }}
      >
      <Box sx={{marginTop: '2rem', display: 'flex', alignItems:'center', flexDirection: 'column'}}>
        <Typography variant="h1" sx={{
          fontSize: '10rem', 
          background: '-webkit-linear-gradient(120deg, #392D57, #8f4183, #f04f8e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>404</Typography>
        
        <StaticImage 
          src='../images/confused-lex.png' 
          alt="Lex" 
          style={{ width: "20%" }} 
          loading="lazy" 
        />
        <br/>

        <Typography variant="body2">We're sorry. This page does not exist.</Typography>
        <br/>
        

        <Button
          variant="filled"
          size="medium"
          component={Link}
          to="/features"
          sx={{
            textTransform: "none",
            padding: '0.75rem 2rem',
            marginBottom: '2rem',
            backgroundImage: 'linear-gradient(270deg, #392D57, #8f4183)',
            color: 'white',
            borderRadius: '1rem',
            filter: `drop-shadow(5px 5px 5px ${theme.palette.branding.deepPurple}50 )`,

            "&:hover": {
              backgroundImage: 'linear-gradient(270deg, #392D5790, #8f418390)',
            },
          }}
        >
          <Typography variant="body2">Go to Homepage</Typography>
        </Button>
        <br/>
        <Typography paragraph><Link to="/"><Brand/></Link></Typography>
      </Box>

      </MaxWidthWrapper>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>

