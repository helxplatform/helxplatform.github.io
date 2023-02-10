import React, { Fragment } from 'react'
import { Typography, Box } from '@mui/material'
import { HomeHero } from '../components/hero/homeHero'
import { homeSection, helxFeatures }  from '../content'
import { IllustrationTextSection, FeaturesSection } from '../components/sections'

const IndexPage = () => {
  return (
    <Fragment>
      <HomeHero/>
      <Box sx={{ margin: '3rem 18rem 1rem', textAlign: 'center'}}>
        <Typography variant='h1'>Launch, Analyze, and Discover Your Data With HeLx</Typography>
        <Typography body1>HeLx empowers researchers in domains from plant genomics to 
        neuroscience to work with their preferred tools and apps in the cloud at scale.</Typography>
      </Box>

    <IllustrationTextSection content={homeSection}/>

    <Typography>Rotaing Verb Section</Typography>

    <FeaturesSection content={helxFeatures}/>

    </Fragment>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
