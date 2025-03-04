import React from "react";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "../link";

const TextCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  color: theme.palette.text.primary,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(1),
  flex: 1,
  mb: "2rem",
  "& h2": {
    whiteSpace: "nowrap",
  },
  "& p": {
    fontSize: "1.1rem",
    lineHeight: 1.5,
    fontWeight: 400,
  },
}));

/**
 * `IllustrationTextSection` displays text with an optional illustration, aligned based on the `left` prop.
 * It is used within MDX files found in `/src/content` by content managers to create content sections with responsive layouts and styles.
 *
 * Props:
 * - `children`: Text content (ReactNode).
 * - `left` (default: false): If true, illustration appears on the left, otherwise right.
 * - `illustration`: Image URL (required).
 * - `link` (optional): URL for the "Read More ..." link.
 *
 * Example:
 * ```mdx
 * import image from "../../images/[IMAGE_PATH]";  // Replace [IMAGE_PATH] with your image's path relative to images directory
 *
 * <IllustrationTextSection
 *   left={true}
 *   illustration={image}
 *   link="https://example.com/read-more"
 * >
 *   ## Section Title
 *
 *   [Link Text](https://example.com)
 *
 *   Section description
 * </IllustrationTextSection>
 * ```
 */

export const IllustrationTextSection = ({
  children,
  left,
  illustration,
  link,
}) => {
  const contentOrder = left ? "row-reverse" : "row";

  return (
    <Stack
      direction={contentOrder}
      alignItems="center"
      spacing={{ xs: 0, sm: 0, md: 6 }}
      sx={{ py: 2 }}
    >
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
          flex: {
            sm: "0 0",
            md: 1,
          },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={illustration}
          style={{
            maxWidth: "60%",
            maxHeight: "60%",
          }}
          loading="lazy"
          alt=""
        />
      </Box>
      <TextCard>
        {children}
        {link && <Link to={link}>Read More ...</Link>}
      </TextCard>
    </Stack>
  );
};
