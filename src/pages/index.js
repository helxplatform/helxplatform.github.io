import React, { Fragment } from "react";
import { HomeHero } from "../components/hero/homeHero";
import { rotatingVerbs, homeHero } from "../content";
import { HeadingSection, RotatingVerbs } from "../components/sections";
import { Subfooter } from "../components/layout/subfooter";
import FeaturesSection from "../content/home/helxFeatures.mdx";
import HomeIllustrationSection from "../content/home/homeIllustrations.mdx";

const headingContent1 = {
  title: "Launch, Analyze, and Discover Your Data With HeLx",
  subtitle:
    "HeLx empowers researchers in domains from plant genomics to neuroscience to work with their preferred tools and apps in the cloud at scale.",
};

const IndexPage = () => {
  return (
    <Fragment>
      <HomeHero content={homeHero} />

      <HeadingSection content={headingContent1} />

      <HomeIllustrationSection />

      <RotatingVerbs content={rotatingVerbs} />

      <FeaturesSection />

      <Subfooter />
    </Fragment>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
