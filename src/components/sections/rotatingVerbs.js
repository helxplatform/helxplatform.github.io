import React, { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography, useTheme, Zoom } from "@mui/material";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";

export const RotatingVerbs = ({ content: { heading, verbs, subheading } }) => {
  const theme = useTheme();
  
  return (
    <MaxWidthWrapper backgroundColor={theme.palette.branding.offWhite} sx={{ mb: 0 }}>
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
          What can you
          <br />
          <WordAnimation
            words={verbs}
            delay={{ betweenWords: 2000, transitionDuration: 500 }}
            prefersReducedMotionWord="build"
            sx={{ fontSize: "1.3em", color: theme.palette.branding.scienceGreen }}
          />
          <br />
          with HeLx today?
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#808080",
            textAlign: "center",
          }}
        >
          {subheading}
        </Typography>
      </Stack>
    </MaxWidthWrapper>
  );
};

export const WordAnimation = ({ words, delay, prefersReducedMotionWord, sx }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const setNextTimeout = () => {
      timeoutRef.current = setTimeout(
        () => {
          setVisible((prev) => !prev);
          setNextTimeout();
        },
        visible ? delay.betweenWords : delay.transitionDuration
      );
    };
    setNextTimeout();

    return () => clearTimeout(timeoutRef.current);
  }, [delay, visible]);

  return (
    <>
      {prefersReducedMotion ? (
        <Box component="span" sx={{ ...sx, display: "inline-block" }}>
          {prefersReducedMotionWord}
        </Box>
      ) : (
        <Zoom
          in={visible}
          timeout={delay.transitionDuration}
          onEnter={() =>
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        >
          <Box component="span" sx={{ ...sx, display: "inline-block" }}>
            {words[currentWordIndex]}
          </Box>
        </Zoom>
      )}
    </>
  );
};

