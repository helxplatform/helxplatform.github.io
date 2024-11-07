import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";
import { Link } from "../link";
import { Button } from "../button";
import EduHelxLogo from "../../images/eduhelx/EduHeLx-logo.png"
const BREAKPOINT = 750;

export const EduHelxHero = ({ content }) => {
  const theme = useTheme();

  return (
    <MaxWidthWrapper
      backgroundImage='linear-gradient(230deg, #372D54, #372D54)'
      sx={{ 
        my: 0, 
        py: 6, 
      }}
    >
      <Box
        sx={{
          maxWidth: "850px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1rem",
          [theme.breakpoints.down(BREAKPOINT)]: {
            maxWidth: '600px',
          },
        }}
      >
        <Typography
          variant="h1"
          color={theme.palette.branding.offWhite}
          sx={{
            margin: 0,
            lineHeight: 1.5,
            fontWeight: 300,
          }}
        >
          In Your Classroom <br/>
          Why Choose <img 
            src={EduHelxLogo} 
            style={{maxWidth: '300px', verticalAlign: 'middle' }}
          />{" "}?
        </Typography>
        <Box sx={{
          maxWidth: "550px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: '2rem',
        }}>
          <Typography 
            variant="body2" 
            color={theme.palette.branding.offWhite}
            sx={{fontWeight: 400, fontSize: '1.3rem'}}
          >
            {content.subheading}
          </Typography>
        </Box>
      </Box>
    </MaxWidthWrapper>
  );
};
