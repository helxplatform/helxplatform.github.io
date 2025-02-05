import React, { Fragment } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Markdown } from "../markdown";

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>
        <Markdown>{children}</Markdown>
      </main>
      <Footer />
    </Fragment>
  );
};
