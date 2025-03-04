import React from "react";
import { Grid, Box } from "@mui/material";
import { styled } from "@mui/system";

export const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.primary,
  borderRadius: "16px",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

/**
 * `GridItem` represents an individual item within a grid layout, wrapped inside a `FeatureCard` for styling.
 * It displays an image and text content in a card-style layout.
 *
 * Note: This component **must** be wrapped inside a `GridContainer` to align properly and function as part of a grid.
 *
 * Props:
 * - `children`: Content to display inside the grid item (required).
 * - `image`: Image URL (required).
 * - `altText`: Alt text for the image (required).
 * - `columnWidth` (optional): Defines the column width in the grid, default is `3`, optional is `2`.
 *
 * Example:
 * ```mdx
 * import { GridContainer } from "../../components/grid";
 * import { GridItem } from "../../components/sections/features";
 *
 * <GridContainer>
 *   <GridItem
 *     image="https://example.com/image.jpg"
 *     altText="Example Image"
 *   >
 *     ### Feature Title
 *     Description for the feature.
 *   </GridItem>
 * </GridContainer>
 * ```
 */

export const GridItem = ({ children, image, altText, columnWidth = 3 }) => (
  <Grid item md={columnWidth === 2 ? 6 : 4} sm={6} xs={12}>
    <FeatureCard>
      <Box sx={{ minHeight: 100 }}>
        <img
          src={image}
          style={{ display: "block", height: 75 }}
          loading="lazy"
          alt={altText}
        />
      </Box>
      <Box
        sx={{ "& h3": { fontSize: "1.1rem" }, "& p": { fontSize: "0.9rem" } }}
      >
        {children}
      </Box>
    </FeatureCard>
  </Grid>
);

export default GridItem;
