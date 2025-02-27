import React, { Fragment } from "react";
import FaqsSection from "../content/resources/faqs.mdx";
import { Subfooter } from "../components/layout/subfooter";
import ResourceCardSection from "../content/resources/resourceCards.mdx";

const ResourcesPage = () => {
  return (
    <Fragment>
      <ResourceCardSection />
      <FaqsSection />
      <Subfooter />
    </Fragment>
  );
};

export default ResourcesPage;

export const Head = () => <title>Resources</title>;
