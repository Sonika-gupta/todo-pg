const db = require('../models/lists')

async function getAllLists (req, res) {
  const [error, result] = await db.readLists()
  // console.log('controller', result)
  if (result) res.send(result)
  else {
    console.log(error)
    res.send({ error, message: 'Read List Failed' })
  }
}

module.exports = {
  getAllLists
}
