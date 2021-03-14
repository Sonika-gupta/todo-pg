const { Pool } = require('pg')
const config = require('../config')

const pool = new Pool(config.dbConnectionObj)
pool.connect()

async function poolQuery (query, values) {
  try {
    const result = await pool.query(query, values)
    // console.log('model', result)
    return [null, result.rows]
  } catch (err) {
    return [err, null]
  }
}
async function readLists () {
  const query = 'SELECT * FROM lists'
  return await poolQuery(query)
}

module.exports = {
  readLists
}
