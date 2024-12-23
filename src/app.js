import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import { postsRouter } from './routes/post.js'
import { corsMiddleware } from './middlewares/cors.js'

dotenv.config()
connectDB()

const app = express()
app.use(corsMiddleware())
app.use(express.json())
app.disable('x-powered-by')

app.use('/posts', postsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})