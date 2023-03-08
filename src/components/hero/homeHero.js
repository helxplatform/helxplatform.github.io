import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";
import { Link } from "gatsby";

const BREAKPOINT = 875;

export const HomeHero = ({ content }) => {
  const theme = useTheme();

  return (
    <MaxWidthWrapper
      backgroundColor={theme.palette.branding.deepPurple}
      sx={{ my: 0, position: "relative", py: "2rem", overflow: "hidden" }}
    >
      <Box
        sx={{
        maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1rem",

          [theme.breakpoints.down(BREAKPOINT)]: {
            maxWidth: '450px'
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.branding.offWhite,
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {content.title}
        </Typography>
        <Typography variant="body2">{content.subheading}</Typography>
        <Button
          variant="filled"
          size="medium"
          component={Link}
          to="/features"
          sx={{
            marginTop: '100px',
            color: theme.palette.branding.deepPurple,
            textTransform: "none",
            backgroundColor: theme.palette.branding.yellow,
            "&:hover": {
              backgroundColor: `${theme.palette.branding.yellow}c0`,
            },
          }}
        >
          <Typography variant="subtitle2">Why use Helx?</Typography>
        </Button>
      </Box>

      <Box
        sx={{
          position: "absolute",
          width: "40%",
          top: "4rem",
          right: 16,
          [theme.breakpoints.down(BREAKPOINT)]: {
            top: "revert",
            bottom: 0,
            transform: "translate(0, 30%)",
          },
        }}
      >
        <img src={content.image} style={{ width: "100%" }} />
      </Box>
    </MaxWidthWrapper>
  );
};
