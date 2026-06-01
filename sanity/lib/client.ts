import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Direct API is more reliable when apicdn.sanity.io fails DNS on some networks
  useCdn: false,
})
