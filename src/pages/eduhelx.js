import React, { Fragment } from 'react'
import { EduHelxHero } from '../components/hero/eduhelxHero'
import { eduhelxHero, aboutEduhelx, eduhelxFeatures, eduHelxTestimonials, readMoreEduhelx }  from '../content'
import { EduHelxIllustrationTextSection, FeaturesSection, HeadingSection, TestimonialSection, IllustrationTextSection } from '../components/sections'
import { Subfooter } from '../components/layout/subfooter'
import { useTheme } from "@emotion/react";

const headingContent1 = {
  title: 'Fantastic Features',
  subtitle: 'EduHeLx is similar to Google Colab and Berkeley D8 infrastructure but customized for the unique needs of your classroom, your materials, and your students.'
}
const headingContent2 = {
  title: 'Read the latest EduHeLx news',
}

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
        content={headingContent1}
        backgroundColor={theme.palette.branding.offWhite}
      />
      <FeaturesSection 
        content={eduhelxFeatures}
        columns={2}
      />
      <TestimonialSection 
        items={eduHelxTestimonials}  
      />
      <HeadingSection 
        content={headingContent2}
        backgroundColor={theme.palette.branding.offWhite}
      />
      <IllustrationTextSection 
        content={readMoreEduhelx}
        backgroundColor={theme.palette.branding.offWhite}
      />

      <Subfooter/>
    </Fragment>
  )
}

export default EduHelxPage

export const Head = () => <title>EduHelx Page</title>
