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
      <Typography variant="h1" align="center" {...props}>
        {children}
      </Typography>
    );
  },
  h2: function Anchor({ node, children, ...props }) {
    return (
      <Typography variant="h2" align="center" {...props}>
        {children}
      </Typography>
    );
  },
  h3: function Anchor({ node, children, ...props }) {
    return (
      <Typography variant="h3" {...props}>
        {children}
      </Typography>
    );
  },
  h4: function Anchor({ node, children, ...props }) {
    return (
      <Typography variant="h4" {...props}>
        {children}
      </Typography>
    );
  },
  h5: function Anchor({ node, children, ...props }) {
    return (
      <Typography variant="h5" {...props}>
        {children}
      </Typography>
    );
  },
  h6: function Anchor({ node, children, ...props }) {
    return (
      <Typography variant="h6" align="center" {...props}>
        {children}
      </Typography>
    );
  },
});

export const Markdown = ({ children }) => {
  return <MDXProvider components={componentMap}>{children}</MDXProvider>;
};
