import React from "react";
import { Stack, Typography } from "@mui/material";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";

export const Hero = ({ content }) => {
  return (
    <MaxWidthWrapper>
      <Stack alignItems='center'>
        <Typography variant="h1">
          {content.title}
        </Typography>
        {content.subheading && <Typography mb='1rem' variant="subtitle1" sx={{ maxWidth: 500, textAlign: 'center' }}>{content.subheading}</Typography>}
        <img src={content.image} alt="Lex" style={{ width: "100%" }} loading="lazy" />
      </Stack>
    </MaxWidthWrapper>
  );
};
