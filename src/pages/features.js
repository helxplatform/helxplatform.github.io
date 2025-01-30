import React, { Fragment } from "react";
import { featuresHero } from "../content";
import { Hero } from "../components/hero/hero";
import FunctionsSection from "../content/features/helxFunctions.mdx";
import UseCasesSection from "../content/features/useCases.mdx";
import { Subfooter } from "../components/layout/subfooter";

const FeaturesPage = () => {
  return (
    <Fragment>
      <Hero content={featuresHero} />
      <FunctionsSection />
      <UseCasesSection />
      <Subfooter />
    </Fragment>
  );
};

export default FeaturesPage;

export const Head = () => <title>Features</title>;
