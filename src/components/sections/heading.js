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
