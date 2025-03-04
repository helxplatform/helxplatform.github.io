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

/**
 * `FaqsItem` renders an individual FAQ item with a question and an answer inside an accordion-style component.
 * It is typically used inside a `FaqsWrapper` component to display a list of FAQ items.
 *
 * Props:
 * - `children`: The answer to the FAQ (ReactNode).
 * - `question`: The FAQ question (string).
 * - `index`: The index of the FAQ item (number) to manage unique `aria-controls`.
 *
 * Example:
 * ```mdx
 * import { FaqsItem, FaqsWrapper } from "../../components/sections/faqs";
 *
 * <FaqsWrapper>
 *   <FaqsItem question="What is the purpose of this tool?" index={0}>
 *     This tool is designed to help users manage and analyze large datasets efficiently.
 *   </FaqsItem>
 *   <FaqsItem question="Can I use this on my mobile device?" index={1}>
 *     Yes, this tool is optimized for both desktop and mobile use.
 *   </FaqsItem>
 *   <FaqsItem question="Is there a support team I can contact?" index={2}>
 *     Yes, we have a dedicated support team available 24/7 to assist you.
 *   </FaqsItem>
 * </FaqsWrapper>
 * ```
 */

export const FaqsItem = ({ children, question, index }) => {
  return (
    <StyledAccordion>
      <StyledAccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`question-${index + 1}-content`}
      >
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
