import React from "react";
import { Grid } from "@mui/material";

export const GridContainer = ({
  children,
  spacing = { md: 8, sm: 6, xs: 4 },
  padding,
}) => {
  return (
    <Grid
      container
      spacing={spacing}
      padding={padding}
      sx={{ justifyContent: "center" }}
    >
      {children}
    </Grid>
  );
};
