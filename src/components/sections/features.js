import React, { Fragment } from "react";
import { Typography, Grid, Box } from "@mui/material";
import { styled } from "@mui/system";

const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "16px",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

// TODO: This is kind of not ideal but it works for now, I also applied overflow
// hidden on the body to prevent the horizontal scrollbar. We may want to rethink
// the maxWidth wrapper for these full bleed styles.
const fullBleedStyles = {
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
};

export const FeaturesSection = ({ content }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F6F6F5",
        ...fullBleedStyles,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={4} pb="4rem" sx={{ maxWidth: "1300px", padding: "32px" }}>
        {content.map((feature, index) => (
          <Grid item md={4} sm={6} xs={12} key={index} alignItems="stretch">
            <FeatureCard>
              <Box sx={{ minHeight: 100 }}>
                <img src={feature.image} style={{ display: "block" }} />
              </Box>
              <Box>
                <Typography mb="1rem" sx={{ fontWeight: "bold" }}>
                  {feature.title}
                </Typography>
                <Typography>{feature.subheading}</Typography>
              </Box>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
