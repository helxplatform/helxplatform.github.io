import React from "react";
import { Stack, Typography } from "@mui/material";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";

export const Hero = ({ content }) => {
  return (
    <MaxWidthWrapper>
      <Stack alignItems='center'>
      <Typography
        variant="h1"
        sx={{
          fontSize: "clamp(2rem, 2rem + 1.6667vw, 3rem)",
          fontFamily: "Open Sans, sans-serif",
          color: "#382C56",
          lineHeight: "1.3",
          textAlign: "center",
        }}
      >
        {content.title}
      </Typography>
      {content.subheading && <Typography mb='1rem' variant="subtitle1" sx={{ maxWidth: 500, textAlign: 'center' }}>{content.subheading}</Typography>}
      <img src={content.image} alt="Lex" style={{ width: "100%" }} />
      </Stack>
    </MaxWidthWrapper>
  );
};
