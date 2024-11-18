import React from 'react';
import { Box, Container } from "@mui/material";

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
