import React, { Fragment } from 'react'
import { Typography, Box } from '@mui/material'
import { HomeHero } from '../components/hero/homeHero'
import { homeSection, rotatingVerbs, helxFeatures }  from '../content'
import { HeadingSection, IllustrationTextSection, RotatingVerbs, FeaturesSection } from '../components/sections'

const headingContent1 = {
  title: 'Launch, Analyze, and Discover Your Data With HeLx',
  subtitle: 'HeLx empowers researchers in domains from plant genomics to neuroscience to work with their preferred tools and apps in the cloud at scale.'
}

const IndexPage = () => {
  return (
    <Fragment>
      <HomeHero/>

      <HeadingSection content={headingContent1}/>

      <IllustrationTextSection content={homeSection}/>

      <RotatingVerbs content={rotatingVerbs}/>

      <FeaturesSection content={helxFeatures}/>

    </Fragment>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
