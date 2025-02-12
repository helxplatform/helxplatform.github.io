import React from "react";
import { Stack, Box } from "@mui/material";
import { Link } from "../link";

export const InstitutionItem = ({ image, altText, link }) => {
  <Box
    sx={{
      filter: "grayscale(1)",
      transition: "filter 250ms",
      margin: "auto 0",
      "&:hover": {
        filter: "grayscale(0)",
        transition: "filter 250ms",
      },
    }}
  >
    <Link to={link}>
      <img
        src={image}
        alt={altText}
        style={{ display: "block", maxHeight: 100 }}
        loading="lazy"
      />
    </Link>
  </Box>;
};

export const InstitutionList = ({ children }) => {
  return (
    <Stack
      direction={"row"}
      gap={{ md: "6rem", sm: "4rem", xs: "2rem" }}
      flexWrap="wrap"
      justifyContent="center"
    >
      {children}
    </Stack>
  );
};
