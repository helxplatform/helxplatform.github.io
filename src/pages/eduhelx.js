import React, { Fragment } from 'react'
import { EduHelxHero } from '../components/hero/eduhelxHero'
import { 
  eduhelxHero, 
  aboutEduhelx, 
  eduhelxFeaturesHeading, 
  eduhelxFeatures, 
  eduHelxTestimonials,
  readMoreEduhelxHeading, 
  readMoreEduhelx }  from '../content'
import { EduHelxIllustrationTextSection, FeaturesSection, HeadingSection, TestimonialSection, IllustrationTextSection } from '../components/sections'
import { Subfooter } from '../components/layout/subfooter'
import { useTheme } from "@emotion/react";

const EduHelxPage = () => {
  const theme = useTheme();

  return (
    <Fragment>
      <EduHelxHero
        content={eduhelxHero}
      />
      <EduHelxIllustrationTextSection 
        content={aboutEduhelx} 
        left={true}
      />
      <HeadingSection 
        content={eduhelxFeaturesHeading}
        backgroundColor={theme.palette.branding.offWhite}
      />
      <FeaturesSection 
        content={eduhelxFeatures}
        columns={2}
      />
      {/* Hide Testimonials until content is finalized and approved */}
      {/* <TestimonialSection 
        items={eduHelxTestimonials}  
      /> */}
      <HeadingSection 
        content={readMoreEduhelxHeading}
        maxWidth="lg"
      />
      <IllustrationTextSection 
        content={readMoreEduhelx}
      />

      <Subfooter/>
    </Fragment>
  )
}

export default EduHelxPage

export const Head = () => <title>EduHelx Page</title>
