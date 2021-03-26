const { listModel: db } = require('../models')

async function getAllLists (req, res) {
  const [error, result] = await db.readLists()
  if (result) res.send(result)
  else {
    console.log(error)
    res.send({ error, message: 'Read Lists Failed' })
  }
}

async function getListById (req, res) {
  const [error, result] = await db.readListById(req.params.id)
  if (result) res.send(result[0])
  else {
    console.log(error)
    res.send({ error, message: 'Read List Failed' })
  }
}

async function createList (req, res) {
  const [error, result] = await db.createList(req.body.name)
  console.log(result)
  if (result) res.send(result[0])
  else {
    console.log(error)
    res.send({ error, message: 'Create List Failed' })
  }
}

async function updateList (req, res) {
  const { id, key, value } = req.body
  const [error, result] = await db.updateList(id, key, value)
  console.log(result)
  if (result) res.send(result[0])
  else {
    console.log(error)
    res.send({ error, message: 'Update List Failed' })
  }
}

async function deleteLists (req, res) {
  const [error, result] = await db.deleteLists(req.body.ids)
  console.log(result)
  if (result) res.send(result)
  else {
    console.log(error)
    res.send({ error, message: 'Delete Lists Failed' })
  }
}

module.exports = {
  getAllLists,
  getListById,
  createList,
  updateList,
  deleteLists
}
