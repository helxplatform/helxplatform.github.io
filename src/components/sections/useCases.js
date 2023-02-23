import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";

// TODO: This is kind of not ideal but it works for now, I also applied overflow
// hidden on the body to prevent the horizontal scrollbar. We may want to rethink
// the maxWidth wrapper for these full bleed styles.
const fullBleedStyles = {
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
};

export const UseCasesSection = ({ content }) => {
  return (
    <Box
      py="4rem"
      sx={{
        backgroundColor: "#F6F6F5",
        ...fullBleedStyles,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // padding: "32px",
      }}
    >
      <Box sx={{ maxWidth: "1200px", padding: "32px" }}>
        <Typography variant="h2">
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
                    <Typography variant="h3" sx={{textAlign: 'center'}}>
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
    </Box>
  );
};
