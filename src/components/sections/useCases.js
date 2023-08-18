import React from "react";
import { Typography, Box, Grid, Button, useTheme } from "@mui/material";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper"
import {graphql, useStaticQuery} from 'gatsby'

const UseCaseLogo = ({useCase}) => {
  const Image = useCase?.image?.defaultProps ? useCase.image : null

  return (
    <Box sx={{ minHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'  }}>
      {
        Image ? (
          <Image style={{maxWidth:"280px"}}/>
        ) : useCase.image ? (
          <img
            src={useCase.image}
            alt={useCase.heading}
            style={{
              display: "block",
              maxHeight: 100,
              maxWidth: '250px'
            }}
          >
            {/* {console.log(useCase.image)} */}
          </img>
        ) : (
          <Box sx={{ minHeight: '100px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: '100%'  }}>
            <Typography variant="h3" sx={{textAlign: 'center', marginBottom: '0'}}>
              {useCase.heading}
            </Typography>
          </Box>
        )
      }
    </Box>
  )
}

export const UseCasesSection = ({ content }) => {
  const theme = useTheme();
const data = useStaticQuery(graphql`

  query {
    allFile(filter: {relativePath: {regex: "/^features\\//"}}) {
    nodes {
      name
      relativePath
      childImageSharp {
        fluid {
          src
          originalName
        }
      }
    }
  }
  }
`)
  return (
    <MaxWidthWrapper backgroundColor={theme.palette.branding.offWhite}>
      <Box>
        {console.log(data.allFile.nodes)}
        <Typography variant="h2">
          How is HeLx being used?
        </Typography>
        <Grid container spacing={{ md: 8, sm: 6, xs: 4 }}>
          {content.map((useCase, index) => (
            <Grid item md={6} xs={12} key={index} alignItems="stretch">
              <Box sx={{ height: "100%", display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
                
                <UseCaseLogo useCase={useCase}/>
                
                <Typography>{useCase.paragraph}</Typography>
                {/* <Button
                  mt="1rem"
                  variant="contained"
                  color="secondary"
                  size="medium"
                  sx={{ marginTop: 'auto', color: "white", textTransform: "revert" }}
                >
                  Learn more
                </Button> */}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </MaxWidthWrapper>
  );
};

export const query = graphql`
  query {
    allFile {
    nodes {
      name
      relativePath
      childImageSharp {
        fluid {
          src
          originalName
        }
      }
    }
  }
  }
`