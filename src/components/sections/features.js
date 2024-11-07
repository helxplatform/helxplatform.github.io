import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";
import { useTheme } from "@mui/material";

const FeatureCard = styled(Box)(({ theme }) => ({
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


export const FeaturesSection = ({ content, columns }) => {
  const theme = useTheme();
  const columnWidth = columns === 3 ? 4 : columns === 2 ? 6 : 12
  
  return (
    <MaxWidthWrapper backgroundColor={theme.palette.branding.offWhite} maxWidth='xl'>   
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={4} pb="4rem" sx={{ maxWidth: "1300px", padding: "32px" }}>
        {content.map((feature, index) => (
          <Grid item md={columnWidth} sm={6} xs={12} key={index} alignItems="stretch">
            <FeatureCard>
              <Box sx={{ minHeight: 100 }}>
                <img src={feature.image} style={{ display: "block", height: 75 }} loading="lazy" alt={feature.title} />
              </Box>
              <Box>
                <Typography mb="1rem" sx={{ fontWeight: "bold" }}>
                  {feature.title}
                </Typography>
                <Typography variant='subtitle2'>{feature.subheading}</Typography>
              </Box>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>
    </Box>
    </MaxWidthWrapper>
  );
};
