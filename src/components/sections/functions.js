import React from "react";
import { Typography, Grid } from "@mui/material";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";

export const SectionGrid = ({ children }) => {
  return (
    <MaxWidthWrapper gutterBottom>
      <Grid container spacing={{ md: 8, sm: 6, xs: 4 }}>
        {children}
      </Grid>
    </MaxWidthWrapper>
  );
};

export const GridItem = ({ heading, children }) => (
  <Grid item md={6} xs={12}>
    <Typography variant="h3">{heading}</Typography>
    <Typography variant="body1">{children}</Typography>
  </Grid>
);
