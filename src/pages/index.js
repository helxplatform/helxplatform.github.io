import React, { Fragment } from "react";
import { HomeHero } from "../components/hero/homeHero";
import { rotatingVerbs, homeHero } from "../content";
import { RotatingVerbs } from "../components/sections";
import { Subfooter } from "../components/layout/subfooter";
import FeaturesSection from "../content/home/helxFeatures.mdx";
import HomeIllustrationSection from "../content/home/homeIllustrations.mdx";

const IndexPage = () => {
  return (
    <Fragment>
      <HomeHero content={homeHero} />

      <HomeIllustrationSection />

      <RotatingVerbs content={rotatingVerbs} />

      <FeaturesSection />

      <Subfooter />
    </Fragment>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
