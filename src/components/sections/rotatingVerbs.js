import React, { Fragment, useEffect } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import {
  useInterval,
  usePrefersReducedMotion,
  useRandomInterval,
} from "../../hooks";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";

export const RotatingVerbs = ({ content: { heading, verbs, subheading } }) => {
  const theme = useTheme();
  
  return (
    <MaxWidthWrapper backgroundColor={theme.palette.branding.offWhite}>
      <Stack flexDirection='column' alignItems='center'>
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(2rem, 2rem + 1.6667vw, 3rem)",
            fontFamily: "Open Sans, sans-serif",
            color: "#382C56",
            lineHeight: "1.3",
            textAlign: "center",
            maxWidth: "500px",
            marginBottom: "1rem",
          }}
        >
          What can you <br/>do<br/> with HeLx today?
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#808080",
            textAlign: 'center',
        }}
        >
          {subheading}
        </Typography>
      </Stack>
    </MaxWidthWrapper>
  );
};
