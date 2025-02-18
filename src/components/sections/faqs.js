import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { styled } from "@mui/system";

// an faq item returns a styled accordion item, with its q & a inside
export const FaqsItem = ({ children, question }) => {
  return (
    <StyledAccordion>
      <StyledAccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="subtitle1">{question}</Typography>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <Typography variant="subtitle2">{children}</Typography>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};

// styled paper, since the accordion doesn't have a container
export const FaqsWrapper = styled(Paper)(() => ({
  borderTop: `1px solid rgba(0 0 0 / 0.15)`,
  elevation: 2,
  borderRadius: "8px",
}));

const StyledAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid rgba(0 0 0 / 0.15)`,
  backgroundColor: "transparent",
  transition: "border-radius 500ms",
  "&:first-of-type": {
    borderRadius: "8px 8px 0 0",
    ".MuiAccordionSummary-root": {
      borderRadius: "8px 8px 0 0",
    },
  },
  "&:last-of-type": {
    borderRadius: "0 0 8px 8px",
    ".MuiAccordionSummary-root:not(.Mui-expanded)": {
      borderRadius: "0 0 8px 8px",
      transition: "border-radius 500ms",
    },
  },
  "&:not(:last-of-type)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const StyledAccordionSummary = styled((props) => (
  <AccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}20`,
  color: theme.palette.primary.main,

  "& .MuiTypography-root": {
    color: "inherit",
    fontWeight: "bold",
  },

  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "inherit",
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid rgba(0 0 0 / 0.15)`,
}));
