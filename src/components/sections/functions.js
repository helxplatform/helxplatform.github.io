import React from "react";
import { Typography, Grid } from "@mui/material";

export const FunctionsGridItem = ({ heading, children }) => (
  <Grid item md={6} xs={12}>
    <Typography variant="h3">{heading}</Typography>
    <Typography variant="body1">{children}</Typography>
  </Grid>
);
