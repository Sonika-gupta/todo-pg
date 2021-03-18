const db = require('../models/lists')

async function getAllLists (req, res) {
  const [error, result] = await db.readLists()
  if (result) res.send(result)
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

async function deleteLists (req, res) {
  const [error, result] = await db.deleteLists(req.body.ids)
  console.log(result)
  if (result) res.send(result)
  else {
    console.log(error)
    res.send({ error, message: 'Delete List Failed' })
  }
}
module.exports = {
  getAllLists,
  createList,
  deleteLists
}
