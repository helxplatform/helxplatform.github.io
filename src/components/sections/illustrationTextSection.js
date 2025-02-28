import React from "react";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "../link";

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
  "& h2": {
    whiteSpace: "nowrap",
  },
  "& p": {
    fontSize: "1.1rem",
    lineHeight: 1.5,
    fontWeight: 400,
  },
}));

export const IllustrationTextSection = ({
  children,
  left,
  illustration,
  link,
}) => {
  const contentOrder = left ? "row-reverse" : "row";

  return (
    <Stack
      direction={contentOrder}
      alignItems="center"
      spacing={{ xs: 0, sm: 0, md: 6 }}
      sx={{ py: 2 }}
    >
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
          flex: {
            sm: "0 0",
            md: 1,
          },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={illustration}
          style={{
            maxWidth: "60%",
            maxHeight: "60%",
          }}
          loading="lazy"
          alt=""
        />
      </Box>
      <TextCard>
        {children}
        {link && <Link to={link}>Read More ...</Link>}
      </TextCard>
    </Stack>
  );
};
