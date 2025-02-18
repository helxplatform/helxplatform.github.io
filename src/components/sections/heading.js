import React from "react";
import { Container } from "@mui/material";

export const HeadingSection = ({ children, maxWidth, wrap = true }) => {
  return (
    <Container
      maxWidth={maxWidth || "sm"}
      sx={{
        textAlign: "center",
        mb: 2,
        pb: 2,
        whiteSpace: !wrap ? "nowrap" : "normal",
      }}
    >
      {children}
    </Container>
  );
};
