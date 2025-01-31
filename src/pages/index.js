import React, { Fragment } from "react";
import { HomeHero } from "../components/hero/homeHero";
import { homeSection, rotatingVerbs, helxFeatures, homeHero } from "../content";
import {
  HeadingSection,
  IllustrationTextSection,
  RotatingVerbs,
} from "../components/sections";
import { Subfooter } from "../components/layout/subfooter";
import NathanTest from "../content/about/nathan-test.mdx";
import FeaturesSection from "../content/home/helxFeatures.mdx";

const headingContent1 = {
  title: "Launch, Analyze, and Discover Your Data With HeLx",
  subtitle:
    "HeLx empowers researchers in domains from plant genomics to neuroscience to work with their preferred tools and apps in the cloud at scale.",
};

const IndexPage = () => {
  return (
    <Fragment>
      <HomeHero content={homeHero} />

      <NathanTest />

      <HeadingSection content={headingContent1} />

      <IllustrationTextSection content={homeSection} imageSize="small" />

      <RotatingVerbs content={rotatingVerbs} />

      <FeaturesSection />

      <Subfooter />
    </Fragment>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
