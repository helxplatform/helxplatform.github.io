import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

const AboutCard = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  color: theme.palette.text.secondary,
  height: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(2),
}));

export const IllustrationTextSection = ({ content }) => {
  return (
    <Box my="4rem">
      <Grid container spacing={{ md: 16, sm: 0 }}>
        {content.reduce((accum, section, index) => {
          const thisSection = [];

          const IllustrationItem = (
            <Grid
              item
              md={6}
              sm={12}
              display={{ md: "block", xs: "none" }}
              key={`${index}-illustration`}
            >
              <img src={section.illustration} style={{ width: "100%" }} />
            </Grid>
          );

          const TextItem = (
            <Grid item md={6} sm={12} key={`${index}-text`}>
              <AboutCard>
                <Typography variant='h3'>{section.title}</Typography>
                
                <Typography variant='body1'>{section.subtitle}</Typography>
              </AboutCard>
            </Grid>
          );

          if (index % 2 === 0) {
            thisSection.push(IllustrationItem);
            thisSection.push(TextItem);
          } else {
            thisSection.push(TextItem);
            thisSection.push(IllustrationItem);
          }

          return [...accum, ...thisSection];
        }, [])}
      </Grid>
    </Box>
  );
};
