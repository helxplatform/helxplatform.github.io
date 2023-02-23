import React from "react";
import { Typography, Box, Grid } from "@mui/material";

export const FunctionsSection = ({ content }) => {
  return (
    <Box my="4rem">
      <Typography variant="h2">
        What can HeLx do for you?
      </Typography>
      <Grid container spacing={{ md: 8, sm: 6, xs: 4 }}>
        {content.map((feature, index) => (
          <Grid item md={6} xs={12} key={index}>
            <Typography variant="h3">
              {feature.heading}
            </Typography>
            <Typography variant="body1">{feature.paragraph}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
