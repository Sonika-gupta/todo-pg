const express = require('express')
const path = require('path')
const config = require('./config')
const router = require('./routers')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use('/lists', router.listRouter)
app.use('/tasks', router.taskRouter)

app.listen(config.port, () => {
  console.log(`listening on ${config.port}`)
})
