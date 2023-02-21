import React from "react";
import { Typography, Box, Grid, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { styled } from "@mui/system";
import { useTheme } from "@emotion/react";

// TODO: This is kind of not ideal but it works for now, I also applied overflow
// hidden on the body to prevent the horizontal scrollbar. We may want to rethink
// the maxWidth wrapper for these full bleed styles.
const fullBleedStyles = {
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
};

export const FaqsSection = ({ content }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...fullBleedStyles,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={{ md: 4, sm: 2, xs: 2 }}
        mb="4rem"
        sx={{ maxWidth: "1400px", padding: "32px" }}
      >
        <Grid item md={4} sm={12} xs={12}>
          <Typography
            variant="h1"
            textAlign={{md: "left", sm: "center", xs: "center"}}
            sx={{
              fontSize: "clamp(2rem, 2rem + 1.6667vw, 3rem)",
              fontFamily: "Open Sans, sans-serif",
              color: "#382C56",
              lineHeight: "1.3",
            }}
          >Questions?</Typography>
        </Grid>
        <Grid item md={8} sm={12} xs={12}>
          {content.map((faq, index) => (
            <StyledAccordion key={index}>
              <StyledAccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`question-${index + 1}-content`}
                id={`question-${index + 1}-header`}
              >
                <Typography color={theme.palette.branding.deepPurple} fontWeight="bold">{faq.question}</Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography>{faq.answer}</Typography>
              </StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

const StyledAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.branding.deepPurple}`,
  transition: 'border-radius 500ms',
  '&:first-of-type': {
    borderRadius: '8px 8px 0 0',
    '.MuiAccordionSummary-root': {
      borderRadius: '8px 8px 0 0',
    }
  },
  '&:last-of-type': {
    borderRadius: '0 0 8px 8px',
    '.MuiAccordionSummary-root:not(.Mui-expanded)': {
      borderRadius: '0 0 8px 8px',
      transition: 'border-radius 500ms',
    }
  },
  '&:not(:last-of-type)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const StyledAccordionSummary = styled((props) => (
  <AccordionSummary
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
