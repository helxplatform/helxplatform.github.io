import React, { Fragment, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { Pre } from "../pre";
import { useState } from "react";

export const RotatingVerbs = ({ content: { heading, verbs, subheading } }) => {
  const [delay, setDelay] = useState(2000);
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVerbIndex(prev => (prev + 1) % verbs.length);
    }, delay)
    return () => clearInterval(intervalId);
  }, [delay, verbs.length])

  return (
    <Fragment>
      <Typography variant="h1">{heading.replace(/do/g, verbs[currentVerbIndex])}</Typography>
      <Typography variant="subtitle1">{subheading}</Typography>
    </Fragment>
  );
};
