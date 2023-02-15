import React, { Fragment } from 'react'
import { Typography } from '@mui/material'
import { featuresHero, helxFunctions, useCases } from '../content'
import { Hero } from '../components/hero/hero'
import { FunctionsSection, UseCasesSection } from '../components/sections/'

const FeaturesPage = () => {
  return (
    <Fragment>
      <Typography variant='h1'>Features Page</Typography>
      <Hero content={featuresHero}/>
      <FunctionsSection content={helxFunctions}/>
      <UseCasesSection content={useCases}/>

    </Fragment>
  )
}

export default FeaturesPage