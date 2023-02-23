import React, { Fragment } from "react";
import { Typography, Box } from "@mui/material";

export const Hero = ({ content }) => {
  return (
    <Box
      my="4rem"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h1">
        {content.title}
      </Typography>
      {content.subheading && <Typography mb='1rem' variant="subtitle1" sx={{ maxWidth: 500, textAlign: 'center' }}>{content.subheading}</Typography>}
      <img src={content.image} alt="Lex" style={{ width: "100%" }} />
    </Box>
  );
};
