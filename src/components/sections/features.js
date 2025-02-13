import React from "react";
import { Typography, Grid, Box } from "@mui/material";
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

export const GridItem = ({
  image,
  title,
  subheading,
  altText,
  columnWidth = 3,
}) => (
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
      <Box>
        <Typography mb="1rem" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="subtitle2">{subheading}</Typography>
      </Box>
    </FeatureCard>
  </Grid>
);

export default GridItem;
