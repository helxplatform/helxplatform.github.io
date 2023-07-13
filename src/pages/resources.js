import React, { Fragment } from 'react'
import { resourceCards, questions} from '../content'
import { ResourceCardSection, FaqsSection } from '../components/sections'
import { Subfooter } from '../components/layout/subfooter'

const ResourcesPage = () => {
  return (
    <Fragment>
      <ResourceCardSection content={resourceCards}/>
      <FaqsSection content={questions}/>
      <Subfooter/>
    </Fragment>
  )
}

export default ResourcesPage