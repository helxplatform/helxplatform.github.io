import React, { Fragment } from "react";
import { EduHelxHero } from "../components/hero/eduhelxHero";
import {
  eduhelxHero,
  aboutEduhelx,
  // eduhelxFeaturesHeading,
  eduhelxFeatures,
  // eduHelxTestimonials,
  // readMoreEduhelxHeading,
  readMoreEduhelx,
} from "../content";
import {
  EduHelxIllustrationTextSection,
  FeaturesSection,
  // HeadingSection,
  // TestimonialSection,
  IllustrationTextSection,
} from "../components/sections";
import { Subfooter } from "../components/layout/subfooter";
import EduHelxFeaturesSection from "../content/eduhelx/eduHelxFeatures.mdx";
import EduHelxAbout from "../content/eduhelx/eduHelxAbout.mdx";
import EduHelxReadMore from "../content/eduhelx/eduHelxReadMore.mdx";

const EduHeLxPage = () => {
  return (
    <Fragment>
      <EduHelxHero content={eduhelxHero} />
      <EduHelxAbout />
      <EduHelxFeaturesSection />
      <EduHelxReadMore />
      {/* Hide Testimonials until content is finalized and approved */}
      {/* <TestimonialSection 
        items={eduHelxTestimonials}  
      /> */}
      <Subfooter />
    </Fragment>
  );
};

export default EduHeLxPage;

export const Head = () => <title>EduHeLx Page</title>;
