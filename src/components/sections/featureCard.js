import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const FeatureCard = styled(Box)(({ theme }) => ({
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
