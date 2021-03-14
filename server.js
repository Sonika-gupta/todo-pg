const express = require('express')
const listRouter = require('./routers/lists')
const taskRouter = require('./routers/tasks')
const path = require('path')
const config = require('./config')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({
  origin: 'http://localhost:3000'
}))
/* app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type'
  )
  next()
})
 */
app.use('/lists', listRouter)
app.use('/tasks', taskRouter)

app.listen(config.port, () => {
  console.log(`listening on ${config.port}`)
})
