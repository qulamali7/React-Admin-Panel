import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import 'dotenv/config'
import { blogRoute } from './src/Routes/BlogRoutes.js';
const app = express()
app.use(cors())
app.use(express.json())

app.use("/", blogRoute)


mongoose.connect(process.env.KEY)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Not Connected!'))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})