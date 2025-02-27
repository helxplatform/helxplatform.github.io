import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import { Link } from "../link";
import { ExternalLinkIcon } from "../../../icons";
import { useTheme } from "@emotion/react";

export const ResourceCard = ({ image, title, link }) => {
  const theme = useTheme();

  return (
    <Grid item md={4} sm={12} xs={12}>
      <Link to={link}>
        <Box
          display="flex"
          flexDirection={{ md: "column", sm: "row" }}
          justifyContent="center"
          gap="1rem"
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
              src={image}
              draggable={false}
              style={{ width: "100%" }}
              loading="lazy"
              alt={`${title}-link`}
            />
          </Button>
          <Typography
            variant="subtitle1"
            sx={{
              flex: { md: "revert", sm: "0 0 220px", xs: "0 0 220px" },
            }}
          >
            {title}
            <ExternalLinkIcon
              fill={theme.palette.primary.main}
              size={14}
              style={{ marginLeft: "0.25rem" }}
            />
          </Typography>
        </Box>
      </Link>
    </Grid>
  );
};
