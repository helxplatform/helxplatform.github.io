import React from "react";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";

const TextCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  color: theme.palette.text.primary,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(1),
  flex: 1,
  mb: "2rem",
}));

export const IllustrationTextSection = ({ children, left, illustration }) => {
  const contentOrder = left ? "row-reverse" : "row";

  return (
    <Stack
      direction={contentOrder}
      alignItems="center"
      spacing={6}
      sx={{ py: 2 }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={illustration}
          style={{
            maxWidth: "50%",
            maxHeight: "50%",
          }}
          loading="lazy"
          alt=""
        />
      </Box>
      <TextCard>{children}</TextCard>
    </Stack>
  );
};
