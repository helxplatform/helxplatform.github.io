import React from "react";
import { Typography, Grid, Accordion, AccordionSummary, AccordionDetails, Paper } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { styled } from "@mui/system";
import { useTheme } from "@emotion/react";
import { MaxWidthWrapper } from "../layout/maxWidthWrapper";

export const FaqsSection = ({ content }) => {
  const theme = useTheme();

  return (
    <MaxWidthWrapper maxWidth='xl' backgroundColor={theme.palette.branding.offWhite} gutterBottom>
      <Grid
        container
        spacing={{ md: 4, sm: 2, xs: 2 }}
      >
        <Grid item md={4} sm={12} xs={12}>
          <Typography
            variant="h2"
            textAlign={{md: "left", sm: "center", xs: "center"}}
          >Questions?</Typography>
        </Grid>
        <Grid item md={8} sm={12} xs={12}>
          <Paper elevation={2} sx={{borderRadius: '8px'}}>
            {content.map((faq, index) => (
              <StyledAccordion key={index}>
                <StyledAccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls={`question-${index + 1}-content`}
                  id={`question-${index + 1}-header`}
                >
                  <Typography variant="subtitle1">{faq.question}</Typography>
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                  <Typography variant="subtitle2">{faq.answer}</Typography>
                </StyledAccordionDetails>
              </StyledAccordion>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </MaxWidthWrapper>
  );
};

const StyledAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid rgba(0 0 0 / 0.15)`,
  backgroundColor: "transparent",
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
  backgroundColor: `${theme.palette.primary.main}20`,
  color: theme.palette.primary.main,

  '& .MuiTypography-root': {
    color: 'inherit',
    fontWeight: 'bold',
  },

  '& .MuiAccordionSummary-expandIconWrapper': {
    color: 'inherit',
  }
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid rgba(0 0 0 / 0.15)`,
}));
