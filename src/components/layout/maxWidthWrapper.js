import React from 'react';
import { Box, Container } from "@mui/material";

export const MaxWidthWrapper = ({
  maxWidth = 'lg',
  backgroundColor = 'transparent',
  children,
  sx
}) => {
  return (
    <Box sx={{ backgroundColor, width: "100%", display: 'flow-root' }}> {/* flow-root disables margin collapse */}
      <Container maxWidth={maxWidth} sx={{ marginY: '4rem', ...sx}}>
        {children}
      </Container>
    </Box>
  );
};
