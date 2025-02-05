import React from "react";
import { Link } from "./link";
import { MDXProvider } from "@mdx-js/react";
import { Typography } from "@mui/material";

const componentMap = () => ({
  a: function Anchor({ node, href, children, ...props }) {
    return (
      <Link to={href} {...props}>
        {children}
      </Link>
    );
  },
  p: function Anchor({ node, children, ...props }) {
    return (
      <Typography level="body-lg" {...props}>
        {children}
      </Typography>
    );
  },
  h1: function Anchor({ node, children, ...props }) {
    return (
      <Typography variant="h1" {...props}>
        {children}
      </Typography>
    );
  },
});

export const Markdown = ({ children }) => {
  return <MDXProvider components={componentMap}>{children}</MDXProvider>;
};
