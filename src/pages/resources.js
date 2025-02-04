import React, { Fragment } from "react";
import { questions } from "../content";
import { FaqsSection } from "../components/sections";
import { Subfooter } from "../components/layout/subfooter";
import ResourceCardSection from "../content/resources/resourceCards.mdx";

const ResourcesPage = () => {
  return (
    <Fragment>
      <ResourceCardSection />
      <FaqsSection content={questions} />
      <Subfooter />
    </Fragment>
  );
};

export default ResourcesPage;

export const Head = () => <title>Resources</title>;
