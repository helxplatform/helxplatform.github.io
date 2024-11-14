import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";
import { useTheme } from "@emotion/react";
import { Link } from "../link"

const AboutCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  color: theme.palette.text.primary,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(1),
  flex: 1,
}));

const IllustrationItem = ({section, imagesize}) => (
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
      style={{ maxWidth: imagesize==="small"? "50%": "75%", maxHeight: imagesize==="small"? "50%":"75%" }} 
      loading="lazy" />
  </Box>
)

const TextItem = ({section}) => (
  <AboutCard>
    <Typography variant='h3'>{section.title}</Typography>
    <Typography variant='body1' sx={{mb: '2rem'}}>{section.subtitle}</Typography>
    { section.link && (
      <Link to={section.link}>Read More ...</Link>
    )}
  </AboutCard>
)


export const IllustrationTextSection = ({ content, left, backgroundColor, imageSize, sx }) => {
  const theme = useTheme();

  return (
    <MaxWidthWrapper
      maxWidth='lg'
      backgroundColor={backgroundColor}
      gutterBottom
    >
      {
        content.map((section, index) => {
          const contentOrder = left ? 'row-reverse' : index % 2 === 0 ? 'row' : 'row-reverse'
          return (
            <Stack
              direction={contentOrder}
              alignItems='center'
              spacing={{ xs: 0, sm: 0, md: 6 }}
              mb={{ xs: 0, sm: 0, md: '2rem' }}
              key={`illustrationSection-${index}`}
            >
              <IllustrationItem section={section} imagesize={imageSize}/>
              <TextItem section={section}/>
            </Stack>
          )
        })
      }
    </MaxWidthWrapper>
  )
}
