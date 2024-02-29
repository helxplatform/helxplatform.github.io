import * as React from "react"
import { Brand } from "../components/layout/header"
import { MaxWidthWrapper } from "../components/layout/maxWidthWrapper"
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "../components/link";
import { Button } from "../components/button";

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
        <br/>

        <Button
          component={Link}
          to="/"
          sx={{
            backgroundImage: 'linear-gradient(270deg, #392D57, #8f4183)',
            color: 'white',
            filter: `drop-shadow(5px 5px 5px ${theme.palette.branding.deepPurple}50 )`,
            "&:hover": {
              backgroundImage: 'linear-gradient(270deg, #392D5790, #8f418390)',
            },
          }}
        >
          <Typography variant="body2">Go to Homepage</Typography>
        </Button>
        <br/>
        <br/>
        <Typography paragraph><Link to="/"><Brand/></Link></Typography>
      </Box>

      </MaxWidthWrapper>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>

