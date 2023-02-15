import React, { Fragment } from 'react'
import { Typography } from '@mui/material'
import { aboutHero, history, institutions } from '../content'
import { Hero } from '../components/hero/hero'
import { IllustrationTextSection, InstitutionList } from '../components/sections'

const AboutPage = () => {
  return (
    <Fragment>
      <Typography variant='h1'>About Page</Typography>
      <Hero content ={aboutHero}/>
      <IllustrationTextSection content={history}/>
      <InstitutionList content={institutions}/>

    </Fragment>
  )
}

export default AboutPage