import React from "react";
import { Grid } from "@mui/material";

/**
 * `GridContainer` creates a responsive grid layout for wrapping section-specific grid items.
 * The grid item used within it depends on the specific section being composed.
 *
 * Props:
 * - `children`: Grid items to display within the container (required).
 * - `spacing` (optional): Controls spacing between items, default is `{ md: 8, sm: 6, xs: 4 }`.
 * - `padding` (optional): Custom padding for the grid container.
 *
 * Example:
 * ```mdx
 * import { GridContainer } from "../../components/grid";
 * import { GridItem } from "../../components/example/gridItem""; // Import a section-specific grid item
 *
 * <GridContainer>
 *   <GridItem>
 *     ### Item 1
 *     Description for the first item.
 *   </GridItem>
 *   <GridItem>
 *     ### Item 2
 *     Description for the second item.
 *   </GridItem>
 *   <GridItem>
 *     ### Item 3
 *     Description for the third item.
 *   </GridItem>
 * </GridContainer>
 * ```
 */
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
