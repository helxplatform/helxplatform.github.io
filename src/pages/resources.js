import React, { Fragment } from 'react'
import { Typography } from '@mui/material'
import { resourceCards, questions} from '../content'
import { ResourceCardSection, FaqsSection } from '../components/sections'

const ResourcesPage = () => {
  return (
    <Fragment>
      <Typography variant='h1'>Resources Page</Typography>
      <ResourceCardSection content={resourceCards}/>
      <FaqsSection content={questions}/>
    </Fragment>
  )
}

export default ResourcesPage