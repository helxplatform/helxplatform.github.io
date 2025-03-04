import React from 'react';
import { Box, Container } from "@mui/material";

/**
 * `MaxWidthWrapper` is a container for ensuring content matches the site's responsive layout.
 * It wraps MDX content, providing consistency in width, margins, and background styles.
 *
 * Props:
 * - `children`: Content to wrap (ReactNode).
 * - `maxWidth`: Maximum width of the container. Acceptable values: `'sm'`, `'md'`, the default: `'lg'`, `'xl'`.
 * - `backgroundColor`: Background color (default: `'transparent'`).
 * - `backgroundImage`: Optional background image.
 * - `gutterBottom`: Adds bottom padding (default: false).
 * - `noMargin`: Removes margin (default: false).
 * - `sx`: Custom styles.
 *
 * Example:
 * ```mdx
 * import { MaxWidthWrapper } from "../../components/layout/maxWidthWrapper";
 * import { HeadingSection } from "../../components/sections/heading";
 * import { SomeComponent } from "../../components/someComponent";
 *
 * <MaxWidthWrapper maxWidth="md" backgroundColor="#f0f0f0" gutterBottom>
 *   <HeadingSection maxWidth="lg">
 *     ## Example Heading Inside MaxWidthWrapper
 *   </HeadingSection>
 *   <SomeComponent>
 *     This is an example component inside the MaxWidthWrapper to demonstrate responsiveness.
 *   </SomeComponent>
 * </MaxWidthWrapper>
 * ```
 */

export const MaxWidthWrapper = ({
  maxWidth = 'lg',
  backgroundColor = 'transparent',
  children,
  backgroundImage,
  gutterBottom,
  noMargin,
  sx
}) => {
  return (
    <Box sx={{ 
      backgroundColor, 
      backgroundImage, 
      width: "100%", 
      display: 'flow-root', 
      margin: noMargin && 0, 
      pt: 6,
      pb: gutterBottom && 6,
    }}> {/* flow-root disables margin collapse */}
      <Container maxWidth={maxWidth} sx={{ ...sx}}>
        {children}
      </Container>
    </Box>
  );
};
