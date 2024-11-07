import React from 'react';
import { Box, Container } from "@mui/material";

export const MaxWidthWrapper = ({
  maxWidth = 'lg',
  backgroundColor = 'transparent',
  children,
  backgroundImage,
  gutterBottom,
  sx
}) => {
  return (
    <Box sx={{ backgroundColor, backgroundImage, width: "100%", display: 'flow-root', mb: gutterBottom && 5 }}> {/* flow-root disables margin collapse */}
      <Container maxWidth={maxWidth} sx={{  ...sx}}>
        {children}
      </Container>
    </Box>
  );
};
