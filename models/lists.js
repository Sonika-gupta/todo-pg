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
async function createList (name) {
  const query = 'INSERT INTO lists (name) values ($1) RETURNING *'
  return await poolQuery(query, [name])
}
async function deleteLists (ids) {
  console.log('ids:', ids)
  const query = 'DELETE FROM lists WHERE id = ANY ($1) RETURNING id'
  return await poolQuery(query, [ids])
}
module.exports = {
  readLists,
  createList,
  deleteLists
}
