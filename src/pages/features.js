import React, { Fragment } from "react";
import { featuresHero, helxFunctions, useCases } from "../content";
import { Hero } from "../components/hero/hero";
import { SectionGrid, UseCasesSection } from "../components/sections/";
import { Subfooter } from "../components/layout/subfooter";

const FeaturesPage = () => {
  return (
    <Fragment>
      <Hero content={featuresHero} />
      <SectionGrid content={helxFunctions} />
      <UseCasesSection content={useCases} />
      <Subfooter />
    </Fragment>
  );
};

export default FeaturesPage;

export const Head = () => <title>Features</title>;
