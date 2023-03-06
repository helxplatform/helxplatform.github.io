import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";

const AboutCard = styled(Box)(({ theme }) => ({
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
    display: { sm: 'none', md: 'flex' } ,
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


export const IllustrationTextSection = ({ content }) => {
  return (
    <MaxWidthWrapper maxWidth='md'>
      {
        content.map((section, index) => {
          const contentOrder = index % 2 === 0 ? 'row' : 'row-reverse'
          return (
            <Stack
              direction={contentOrder}
              spacing={{ sm: 0, md: 6 }}
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
