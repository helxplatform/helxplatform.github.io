import React from "react";
import { Container } from "@mui/material";

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
