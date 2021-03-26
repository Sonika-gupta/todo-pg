const { taskModel: db } = require('../models')

async function getAllTasks (req, res) {
  const [error, result] = await db.readTasks(req.params.listId)
  if (result) res.send(result)
  else {
    console.log(error)
    res.send({ error, message: 'Read Tasks Failed' })
  }
}

async function getTasksTitles (req, res) {
  const [error, result] = await db.readTasksTitles(req.params.listId)
  if (result) res.send(result)
  else {
    console.log(error)
    res.send({ error, message: 'Read Tasks Failed' })
  }
}

async function createTask (req, res) {
  const [error, result] = await db.createTask(req.body)
  if (result) res.send(result[0])
  else {
    console.log(error)
    res.send({ error, message: 'Create Tasks Failed' })
  }
}

async function updateTask (req, res) {
  const [error, result] = await db.updateTask(req.body)
  if (result) res.send(result[0])
  else {
    console.log(error)
    res.send({ error, message: 'Update Task Failed' })
  }
}

async function deleteTask (req, res) {
  const [error, result] = await db.deleteTask(req.body.id)
  if (result) res.send(result[0])
  else {
    console.log(error)
    res.send({ error, message: 'Delete Tasks Failed' })
  }
}

module.exports = {
  getAllTasks,
  getTasksTitles,
  createTask,
  updateTask,
  deleteTask
}
