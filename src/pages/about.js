import React, { Fragment } from 'react'
import { aboutHero, history, institutions } from '../content'
import { Hero } from '../components/hero/hero'
import { IllustrationTextSection, InstitutionList } from '../components/sections'
import { Subfooter } from '../components/layout/subfooter'

const AboutPage = () => {
  return (
    <Fragment>
      <Hero content ={aboutHero}/>
      <IllustrationTextSection content={history}/>
      <InstitutionList content={institutions}/>
      <Subfooter/>
    </Fragment>
  )
}

export default AboutPage

export const Head = () => <title>About HeLx</title>
