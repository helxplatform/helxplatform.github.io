import React, { Fragment } from 'react'
import { Typography } from '@mui/material'
import { history, institutions } from '../content'
import { IllustrationTextSection, InstitutionList } from '../components/sections'

const AboutPage = () => {
  return (
    <Fragment>
      <Typography variant='h1'>About Page</Typography>
      <IllustrationTextSection content={history}/>
      <InstitutionList content={institutions}/>

    </Fragment>
  )
}

export default AboutPage