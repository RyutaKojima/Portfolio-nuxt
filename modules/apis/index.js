import { createClient } from 'contentful'
import dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})

const fetchEntries = () => client.getEntries()

export default fetchEntries
