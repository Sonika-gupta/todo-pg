const { Pool } = require('pg')
const config = require('../config')

const pool = new Pool(config.dbConnectionObj)
pool.connect()

async function poolQuery (query, values) {
  console.log('Requesting', query, values)
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

async function readListById (id) {
  const query = 'SELECT * FROM lists WHERE id = $1'
  return await poolQuery(query, [id])
}

async function createList (name) {
  const query = 'INSERT INTO lists (name) values ($1) RETURNING *'
  return await poolQuery(query, [name])
}

async function updateList (id, key, value) {
  let query
  switch (key) {
    case 'name': query = 'UPDATE lists SET name = $1 where id = $2 RETURNING *'
      break
    case 'location': query = 'UPDATE lists SET location = $1 where id = $2 RETURNING *'
      break
    case 'color': query = 'UPDATE lists SET color = $1 where id = $2 RETURNING *'
      break
  }
  return await poolQuery(query, [value, id])
}

async function deleteLists (ids) {
  console.log('ids:', ids)
  const query = 'DELETE FROM lists WHERE id = ANY ($1) RETURNING id'
  return await poolQuery(query, [ids])
}
module.exports = {
  createList,
  readLists,
  readListById,
  updateList,
  deleteLists
}
