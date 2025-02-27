import React, { Fragment } from "react";
import { aboutHero } from "../content";
import { Hero } from "../components/hero/hero";
import { Subfooter } from "../components/layout/subfooter";
import InstitutionListSection from "../content/about/institutions.mdx";
import AboutIllustrationSection from "../content/about/history.mdx";

const AboutPage = () => {
  return (
    <Fragment>
      <Hero content={aboutHero} />
      <AboutIllustrationSection />
      <InstitutionListSection />
      <Subfooter />
    </Fragment>
  );
};

export default AboutPage;

export const Head = () => <title>About HeLx</title>;
