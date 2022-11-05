require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

//db
const connectDB = require('./db/connect')

//routes
const todoRouter = require('./routes/todoRoutes')

//middleware
app.use(express.json())

app.use('/', todoRouter)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listning on port : ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
start()
