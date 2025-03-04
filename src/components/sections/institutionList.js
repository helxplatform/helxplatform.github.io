import React from "react";
import { Stack, Box } from "@mui/material";
import { Link } from "../link";

/**
 * `InstitutionItem` displays an institution's logo as a clickable link. The logo is grayscale by default and colorizes on hover.
 *
 * Note: This component **must** be wrapped inside an `InstitutionList` to function properly.
 *
 * Props:
 * - `image`: Institution logo image URL (required).
 * - `altText`: Alt text for the image (required for accessibility).
 * - `link`: The URL the logo links to (required).
 *
 * Example:
 * ```mdx
 * import { InstitutionItem } from "../../components/sections/institutionList";
 * import exampleLogo from "../../images/example-logo.svg";
 *
 * <InstitutionItem
 *   image={exampleLogo}
 *   altText="Example Institution"
 *   link="https://example.com"
 * />
 * ```
 */

export const InstitutionItem = ({ image, altText, link }) => {
  return (
    <Box
      sx={{
        filter: "grayscale(1)",
        transition: "filter 250ms",
        margin: "auto 0",
        "&:hover": {
          filter: "grayscale(0)",
          transition: "filter 250ms",
        },
      }}
    >
      <Link to={link}>
        <img
          src={image}
          alt={altText}
          style={{ display: "block", maxHeight: 100 }}
          loading="lazy"
        />
      </Link>
    </Box>
  );
};

/**
 * `InstitutionList` wraps `InstitutionItem` components and arranges them in a responsive row layout.
 *
 * Props:
 * - `children`: The list of `InstitutionItem` components to render (required).
 *
 * Example:
 * ```mdx
 * import { InstitutionList, InstitutionItem } from "../../components/sections/institutionList";
 * import exampleLogo1 from "../../images/example-logo1.svg";
 * import exampleLogo2 from "../../images/example-logo2.svg";
 *
 * <InstitutionList>
 *   <InstitutionItem
 *     image={exampleLogo1}
 *     altText="Example Institution 1"
 *     link="https://example1.com"
 *   />
 *   <InstitutionItem
 *     image={exampleLogo2}
 *     altText="Example Institution 2"
 *     link="https://example2.com"
 *   />
 * </InstitutionList>
 * ```
 */

export const InstitutionList = ({ children }) => {
  return (
    <Stack
      direction={"row"}
      gap={{ md: "6rem", sm: "4rem", xs: "2rem" }}
      flexWrap="wrap"
      justifyContent="center"
    >
      {children}
    </Stack>
  );
};
