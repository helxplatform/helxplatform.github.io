import React from "react";
import { Typography, Box, Grid, Button, useTheme } from "@mui/material";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper"


export const UseCasesSection = ({ content }) => {
  const theme = useTheme();

  return (
    <MaxWidthWrapper backgroundColor={theme.palette.branding.offWhite}>
      <Box>
        <Typography
          pb='2rem'
          variant="h1"
          sx={{
            fontSize: "clamp(2rem, 2rem + 1.6667vw, 3rem)",
            fontFamily: "Open Sans, sans-serif",
            color: "#382C56",
            marginBottom: "2rem",
          }}
        >
          How is HeLx being used?
        </Typography>
        <Grid container spacing={{ md: 8, sm: 6, xs: 4 }}>
          {content.map((useCase, index) => (
            <Grid item md={6} xs={12} key={index} alignItems="stretch">
              <Box sx={{ height: "100%", display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
                {useCase.image && (
                  <Box sx={{ minHeight: 120, alignSelf: 'center' }}>
                    <img
                      src={useCase.image}
                      style={{
                        display: "block",
                        maxHeight: 100,
                      }}
                    />
                  </Box>
                )}
                <Box>
                  {!useCase.image && (
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: "clamp(1.8rem, 1.8rem + 1.6667vw, 2.5rem)",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#4D4D4D",
                        marginBottom: "1rem",
                      }}
                    >
                      {useCase.heading}
                    </Typography>
                  )}
                  <Typography>{useCase.paragraph}</Typography>
                </Box>
                <Button
                  mt="1rem"
                  variant="contained"
                  color="secondary"
                  size="medium"
                  sx={{ marginTop: 'auto', color: "white", textTransform: "revert" }}
                >
                  Learn more
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </MaxWidthWrapper>
  );
};
