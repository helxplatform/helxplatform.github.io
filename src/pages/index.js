import React, { Fragment } from 'react'
import { HomeHero } from '../components/hero/homeHero'
import { homeSection, rotatingVerbs, helxFeatures, homeHero }  from '../content'
import { HeadingSection, IllustrationTextSection, RotatingVerbs, FeaturesSection } from '../components/sections'
import { Subfooter } from '../components/layout/subfooter'

const headingContent1 = {
  title: 'Launch, Analyze, and Discover Your Data With HeLx',
  subtitle: 'HeLx empowers researchers in domains from plant genomics to neuroscience to work with their preferred tools and apps in the cloud at scale.'
}

const IndexPage = () => {
  return (
    <Fragment>
      <HomeHero content={homeHero}/>

      <HeadingSection content={headingContent1}/>

      <IllustrationTextSection content={homeSection}/>

      <RotatingVerbs content={rotatingVerbs}/>

      <FeaturesSection content={helxFeatures}/>

      <Subfooter/>
    </Fragment>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
