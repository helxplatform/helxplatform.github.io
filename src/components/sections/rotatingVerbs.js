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
            maxWidth: "400px",
            marginBottom: "1rem",
          }}
        >
          What can you
          <br />
          <Typer
            words={verbs}
            prefersReducedMotionWord="do"
            delay={{
              betweenTypedLetters: [150, 300],
              betweenBackspacedLetters: [50, 100],
              betweenWords: [2000, 2500],
              cursor: 500,
            }}
          />
          {" with"}
          <br />
          HeLx today?
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#808080",
          }}
        >
          {subheading}
        </Typography>
      </Stack>
    </MaxWidthWrapper>
  );
};

const Typer = ({ words, prefersReducedMotionWord, delay }) => {
  const [currentDelayRange, setCurrentDelayRange] = useState(
    delay.betweenTypedLetters
  );
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isBackspacing, setIsBackspacing] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useInterval(
    () => {
      setIsCursorVisible((prev) => !prev);
    },
    prefersReducedMotion ? null : delay.cursor
  );

  // use a random interval to make the typing feel more realistic:
  // when a word is being typed, wait `delay.betweenTypedLetters` between letters
  // when a word is finished, wait `delay.betweenWords` for one cycle to let the user read the word
  // when `delay.betweenWords` is finished, backspace with `delay.betweenBackspacedLetters` to quickly delete the word
  useRandomInterval(() => {
    // if the last interval was a long delay (pause between words),
    // switch to backspacing speed
    if (isWaiting) {
      setCurrentDelayRange(delay.betweenBackspacedLetters);
      setIsWaiting(false);
    }

    let nextLetterIndex = letterIndex + (isBackspacing ? -1 : 1);

    // word has been fully typed
    if (nextLetterIndex > words[wordIndex].length - 1) {
      setIsBackspacing(true);
      // set isWaiting to keep the word displayed for one long cycle
      setIsWaiting(true);
      setCurrentDelayRange(delay.betweenWords);
    }

    // word has been fully backspaced
    else if (nextLetterIndex === 0) {
      setIsBackspacing(false);
      setCurrentDelayRange(delay.betweenTypedLetters);
      // go to the next word
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    setLetterIndex(nextLetterIndex);
  }, ...(prefersReducedMotion ? [null, null] : currentDelayRange));

  return (
    <>
      {prefersReducedMotion
        ? prefersReducedMotionWord
        : words[wordIndex].slice(0, letterIndex)}
      {!prefersReducedMotion && (
        <span
          style={{
            position: "absolute",
            width: "3px",
            opacity: isCursorVisible ? 1 : 0,
            transition: `opacity ${delay.cursor}`,
            height: "1.3em",
            backgroundColor: "rgba(0 0 0 / 0.5)",
          }}
        />
      )}
    </>
  );
};
