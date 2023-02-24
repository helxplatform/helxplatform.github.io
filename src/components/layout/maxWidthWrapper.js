import React from 'react';
import { Box, Container } from "@mui/material";

export const MaxWidthWrapper = ({
  maxWidth = 'lg',
  backgroundColor = 'transparent',
  children,
}) => {
  return (
    <Box sx={{ backgroundColor, width: "100%" }}>
      <Container maxWidth={maxWidth} sx={{ paddingY: '4rem' }}>
        {children}
      </Container>
    </Box>
  );
};
