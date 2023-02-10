import React, { Fragment } from 'react'
import { Typography } from '@mui/material'
import { helxFunctions, useCases } from '../content'
import { FunctionsSection, UseCasesSection } from '../components/sections/'

const FeaturesPage = () => {
  return (
    <Fragment>
      <Typography variant='h1'>Features Page</Typography>
      <FunctionsSection content={helxFunctions}/>
      <UseCasesSection content={useCases}/>

    </Fragment>
  )
}

export default FeaturesPage