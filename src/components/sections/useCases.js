import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import { Link } from "../link";

export const UseCasesGridItem = ({
  image,
  altText,
  children,
  linkText,
  linkURL,
}) => (
  <Grid item md={6} xs={12} alignItems="stretch">
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          minHeight: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src={image}
          style={{ display: "block", maxHeight: 100, maxWidth: "250px" }}
          loading="lazy"
          alt={`${altText}`}
        />
      </Box>
      <Typography>{children}</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Link to={linkURL}>
          <Button
            mt="1rem"
            variant="contained"
            color="primary"
            size="medium"
            sx={{ textTransform: "revert" }}
          >
            {linkText}
          </Button>
        </Link>
      </Box>
    </Box>
  </Grid>
);
