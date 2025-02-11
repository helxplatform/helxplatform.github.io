import React, { Fragment } from "react";
import { aboutHero, history, institutions } from "../content";
import { Hero } from "../components/hero/hero";
import { InstitutionList } from "../components/sections";
import { Subfooter } from "../components/layout/subfooter";
// todo: import { AboutIllustrationSection } from mdx

const AboutPage = () => {
  return (
    <Fragment>
      <Hero content={aboutHero} />
      {/* <AboutIllustrationSection /> */}
      <InstitutionList content={institutions} />
      <Subfooter />
    </Fragment>
  );
};

export default AboutPage;

export const Head = () => <title>About HeLx</title>;
