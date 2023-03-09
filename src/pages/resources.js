import React, { Fragment } from 'react'
import { resourceCards, questions} from '../content'
import { ResourceCardSection, FaqsSection } from '../components/sections'

const ResourcesPage = () => {
  return (
    <Fragment>
      <ResourceCardSection content={resourceCards}/>
      <FaqsSection content={questions}/>
    </Fragment>
  )
}

export default ResourcesPage

export const Head = () => <title>Resources</title>
