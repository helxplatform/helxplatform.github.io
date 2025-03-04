import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import { Link } from "../link";

/**
 * `UseCasesGridItem` is a component designed to be used as a grid item within a `GridContainer`.
 * Each `UseCasesGridItem` represents a section with an image, text, and a link, typically used for displaying various use cases or features.
 *
 * Note: This component **must** be wrapped inside a `GridContainer` to function properly and align correctly.
 *
 * Props:
 * - `image`: Image URL (required).
 * - `altText`: Alt text for the image (required).
 * - `children`: Text content to display (required).
 * - `linkText`: Text for the button (required).
 * - `linkURL`: URL to navigate when the button is clicked (required).
 *
 * Example:
 * ```mdx
 * import { GridContainer } from "../../components/grid";
 * import { UseCasesGridItem } from "../../components/sections/useCases";
 *
 * <GridContainer>
 *   <UseCasesGridItem
 *     image="https://example.com/image.jpg"
 *     altText="Example Image"
 *     linkText="Learn More"
 *     linkURL="https://example.com"
 *   >
 *     ### Example Use Case
 *     Description of the example use case.
 *   </UseCasesGridItem>
 * </GridContainer>
 * ```
 */

export const UseCasesGridItem = ({
  image,
  altText,
  children,
  linkText,
  linkURL,
}) => (
  <Grid item md={6} xs={12} alignItems="stretch">
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          minHeight: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src={image}
          style={{ display: "block", maxHeight: 100, maxWidth: "250px" }}
          loading="lazy"
          alt={`${altText}`}
        />
      </Box>
      <Typography>{children}</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Link to={linkURL}>
          <Button
            mt="1rem"
            variant="contained"
            color="primary"
            size="medium"
            sx={{ textTransform: "revert" }}
          >
            {linkText}
          </Button>
        </Link>
      </Box>
    </Box>
  </Grid>
);
