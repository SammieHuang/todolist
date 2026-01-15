import 'dotenv/config'
import { Pool } from 'pg'

const connectionString = process.env.DATABASE_URL

if (!connectionString) throw new Error('Missing connection url')

export const pool = new Pool({
    connectionString
})