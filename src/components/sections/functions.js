import React from "react";
import { Grid } from "@mui/material";

export const FunctionsGridItem = ({ children }) => (
  <Grid item md={6} xs={12}>
    {children}
  </Grid>
);
