import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import damagedDefectRoutes from './routes'
require('dotenv').config()
const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json());

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@maisonettecluster0.p8m37.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

app.use(damagedDefectRoutes)

const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  })
  .catch(error =>{
    throw error
  })