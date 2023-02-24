import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper"
import { useTheme } from '@mui/material/styles'

export const InstitutionList = ({ content }) => {
  const theme = useTheme()

  return (
    <MaxWidthWrapper backgroundColor={theme.palette.branding.offWhite}>
      <Stack gap="2rem">
        <Typography
          sx={{
            fontSize: "clamp(1.5rem, 1.5rem + 1.6667vw, 2.2rem)",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 400,
            color: "#382C56",
            lineHeight: "1.3",
            textAlign: "center",
          }}
        >
          HeLx is made possible through the following funders
        </Typography>
        <Stack
          direction={"row"}
          gap={{md: "6rem", sm: '4rem', xs: '2rem'}}
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
    </MaxWidthWrapper>    

  );
};
