const { Pool } = require('pg')
const config = require('../config')

const pool = new Pool(config.dbConnectionObj)
pool.connect()

async function poolQuery (query, values) {
  console.log('Requesting', query, values)
  try {
    const result = await pool.query(query, values)
    return [null, result.rows]
  } catch (err) {
    return [err, null]
  }
}
async function readTasks (listId) {
  console.log(listId)
  const query = 'SELECT * FROM tasks WHERE listId = $1 ORDER BY isComplete, priority DESC, deadline ASC'
  return await poolQuery(query, [listId])
}

module.exports = {
  readTasks
}