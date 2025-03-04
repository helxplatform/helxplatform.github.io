import React from "react";
import { Grid } from "@mui/material";

/**
 * `FunctionsGridItem` is a simple grid item component designed to be used within a `GridContainer`.
 * It is intended to hold content such as text, images, or other elements inside a grid layout.
 *
 * Note: This component **must** be wrapped inside a `GridContainer` to align correctly within the grid.
 *
 * Props:
 * - `children`: Content to display inside the grid item (required).
 *
 * Example:
 * ```mdx
 * import { GridContainer } from "../../components/grid";
 * import { FunctionsGridItem } from "../../components/sections/functions";
 *
 * <GridContainer>
 *   <FunctionsGridItem>
 *     ### Example Function
 *     Description of the example function.
 *   </FunctionsGridItem>
 * </GridContainer>
 * ```
 */

export const FunctionsGridItem = ({ children }) => (
  <Grid item md={6} xs={12}>
    {children}
  </Grid>
);
