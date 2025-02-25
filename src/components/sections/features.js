import React from "react";
import { Grid, Box } from "@mui/material";
import { styled } from "@mui/system";

export const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.primary,
  borderRadius: "16px",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const GridItem = ({ children, image, altText, columnWidth = 3 }) => (
  <Grid item md={columnWidth === 2 ? 6 : 4} sm={6} xs={12}>
    <FeatureCard>
      <Box sx={{ minHeight: 100 }}>
        <img
          src={image}
          style={{ display: "block", height: 75 }}
          loading="lazy"
          alt={altText}
        />
      </Box>
      <Box
        sx={{ "& h3": { fontSize: "1.1rem" }, "& p": { fontSize: "0.9rem" } }}
      >
        {children}
      </Box>
    </FeatureCard>
  </Grid>
);

export default GridItem;
