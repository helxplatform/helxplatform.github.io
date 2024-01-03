import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import { Link } from '../link'
import { MaxWidthWrapper } from "../layout/maxWidthWrapper"
import { useTheme } from '@mui/material/styles'

export const InstitutionList = ({ content }) => {
  const theme = useTheme()

  return (
    <MaxWidthWrapper backgroundColor={theme.palette.branding.offWhite}>
      <Stack gap="2rem">
        <Typography variant="h2" align="center">
          HeLx is made possible through projects supported by the following funders
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
              <Link to={institution.link}>
                <img
                  src={institution.image}
                  alt={institution.institutionName}
                  style={{ display: "block", maxHeight: 100 }}
                  loading="lazy"
                />
              </Link>
            </Box>
          ))}
        </Stack>
      </Stack>
    </MaxWidthWrapper>    

  );
};
