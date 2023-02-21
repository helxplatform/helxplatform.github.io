import React from "react";
import { Typography, Box, Grid } from "@mui/material";

export const FunctionsSection = ({ content }) => {
  return (
    <Box my="4rem">
      <Typography
        variant="h1"
        sx={{
          fontSize: "clamp(2rem, 2rem + 1.6667vw, 3rem)",
          fontFamily: "Open Sans, sans-serif",
          color: "#382C56",
          marginBottom: "2rem",
        }}
      >
        What can HeLx do for you?
      </Typography>
      <Grid container spacing={{ md: 8, sm: 6, xs: 4 }}>
        {content.map((feature, index) => (
          <Grid item md={6} xs={12} key={index}>
            <Typography
              sx={{
                fontSize: "clamp(1rem, 1rem + 1.6667vw, 1.5rem)",
                lineHeight: 1.5,
                marginBottom: "0.5rem",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              {feature.heading}
            </Typography>
            <Typography variant="body1">{feature.paragraph}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
