import React from "react";
import { Typography, Box, Grid, Button, Link } from "@mui/material";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper"
import { ExternalLinkIcon } from "../icons"
import { useTheme } from "@emotion/react";

export const ResourceCardSection = ({ content }) => {
  const theme = useTheme();

  return (
    <MaxWidthWrapper>
      <Typography
        variant="h1"
        sx={{
          fontSize: "clamp(2rem, 2rem + 1.6667vw, 3rem)",
          fontFamily: "Open Sans, sans-serif",
          color: "#382C56",
          lineHeight: "1.3",
          textAlign: "center",
        }}
      >
        Resources
      </Typography>
      <Grid container spacing={4} my="2rem" sx={{display: "flex", justifyContent: "center"}}>
        {content.map((resource, index) => (
          <Grid item md={4} sm={12} xs={12} key={index}>
            <Link href={resource.link} target="_blank">
              <Box
                display="flex"
                flexDirection={{ md: "column", sm: "row" }}
                justifyContent={{ sm: "center", xs: "center" }}
                gap={{ md: "0.5rem", sm: "1rem", xs: "1rem" }}
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  sx={{
                    flex: { md: "revert", sm: "0 1 150px", xs: "0 1 150px" },
                    width: "100%",
                    padding: "0",
                    border: "none",
                    borderRadius: 0,
                    "&:hover": { border: "none" },
                  }}
                >
                  <img
                    src={resource.image}
                    draggable={false}
                    style={{ width: "100%" }}
                    loading="lazy"
                  />
                </Button>
                <Typography
                  variant="subtitle1"
                  sx={{
                    flex: { md: "revert", sm: "0 0 220px", xs: "0 0 220px" },
                  }}
                >
                  {resource.title}
                  <ExternalLinkIcon
                    fill={theme.palette.primary.main}
                    size={14}
                    style={{ marginLeft: "0.25rem" }}
                  />
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </MaxWidthWrapper>
  );
};
