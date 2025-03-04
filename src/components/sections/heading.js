import React from "react";
import { Container } from "@mui/material";

/**
 * `HeadingSection` is a container that centers and formats a heading with optional text content.
 * It is typically used for displaying section headings or titles with configurable max width.
 *
 * Props:
 * - `children`: The content to display inside the container (required).
 * - `maxWidth` (optional): The maximum width of the container. Defaults to "sm" if not provided.
 *
 * Example:
 * ```mdx
 * import { HeadingSection } from "../../components/sections/heading";
 *
 * <HeadingSection maxWidth="lg">
 *   ## Our Partners
 * </HeadingSection>
 * ```
 */

export const HeadingSection = ({ children, maxWidth }) => {
  return (
    <Container
      maxWidth={maxWidth || "sm"}
      sx={{
        textAlign: "center",
        mb: 2,
        pb: 4,
        "& p": {
          fontSize: "1.2rem",
          lineHeight: 1.5,
          fontWeight: 400,
        },
      }}
    >
      {children}
    </Container>
  );
};
