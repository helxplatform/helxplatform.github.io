import React from "react";
import { Typography, Stack, Box } from "@mui/material";

export const InstitutionList = ({ content }) => {
  return (
    <Stack gap="2rem" my="4rem">
      <Typography variant="h2">
        HeLx is made possible through the following funders
      </Typography>
      <Stack
        direction={"row"}
        gap="2rem"
        flexWrap="wrap"
        justifyContent="center"
      >
        {content.map((institution, index) => (
          <Box
            key={index}
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
            <a href={institution.link} target="_blank">
              <img
                src={institution.image}
                alt={institution.institutionName}
                style={{ display: "block", maxHeight: 100 }}
              />
            </a>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
