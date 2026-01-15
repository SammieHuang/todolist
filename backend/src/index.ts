import type { Request, Response, NextFunction } from 'express'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import route from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/', route)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error.stack)
  res.status(500).send(`Error: ${error}` )
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Judi's radio station broadcasting 24/7")
})
