import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";

const AboutCard = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(1),
  flex: 2,
}));

const IllustrationItem = ({section}) => (
  <Box sx={{
    display: { xs: 'none', sm: 'none', md: 'flex' } ,
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
      style={{
        margin: 'auto', 
        maxWidth: "300px", 
        maxHeight: "450px", 
        minWidth: "200px", 
        minHeight: "300px"
       }} 
      loading="lazy" />
  </Box>
)

const TextItem = ({section}) => (
  <AboutCard>
    <Typography variant='h3' sx={{fontSize: '2.5rem'}}>{section.title}</Typography>
    <Typography variant='body1' sx={{fontSize: '1.25rem', fontWeight: 400}}>{section.subtitle}</Typography>
  </AboutCard>
)


export const EduHelxIllustrationTextSection = ({ content, left }) => {

  return (
    <MaxWidthWrapper maxWidth='lg' gutterBottom>
      {
        content.map((section, index) => {
          const contentOrder = left ? 'row-reverse' : index % 2 === 0 ? 'row' : 'row-reverse'
          return (
            <Stack
              direction={contentOrder}
              alignItems='center'
              spacing={{ xs: 0, sm: 0, md: 6 }}
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
