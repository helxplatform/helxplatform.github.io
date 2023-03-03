import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";

const AboutCard = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  color: theme.palette.text.secondary,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(1),
  textAlign: 'center',
  flex: 1,
}));

const IllustrationItem = ({section}) => (
  <Box sx={{
    flex: {
      sm: '0 0',
      md: 1
    },
    justifyContent: 'center',
    alignItems: 'center',
  }}>
      <img
      src={section.illustration} 
      alt={section.illustrationName}
      style={{ maxWidth: "300px" }} 
      loading="lazy" />
  </Box>
)

const TextItem = ({section}) => (
  <AboutCard>
    <Typography variant='h3'>{section.title}</Typography>
    <Typography variant='body1'>{section.subtitle}</Typography>
  </AboutCard>
)


 const IllustrationTextSection2 = ({ content }) => {
  return (
    <MaxWidthWrapper maxWidth='md'>
      {
        content.map((section, index) => {
          const contentOrder = index % 2 === 0 ? 'row' : 'row-reverse'
          return (
            <Stack
              direction={contentOrder}
              spacing={6}
              key={`illustrationSection-${index}`}
            >
              <IllustrationItem section={section}/>
              <TextItem section={section}/>
            </Stack>
          )
        })
      }
    </MaxWidthWrapper>
  )
}

export const IllustrationTextSection = ({ content }) => {
  return (
    <MaxWidthWrapper>
      <Box>
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
                <img src={section.illustration} style={{ width: "100%" }} loading="lazy" />
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
    </MaxWidthWrapper>
  );
};
