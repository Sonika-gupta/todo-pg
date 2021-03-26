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
  const query = 'SELECT * FROM tasks WHERE listId = $1 ORDER BY isComplete, priority DESC, deadline ASC'
  return await poolQuery(query, [listId])
}

async function readTasksTitles (listId) {
  const query = 'SELECT title FROM tasks WHERE listId = $1 AND isComplete = false ORDER BY priority DESC, deadline ASC LIMIT 10'
  return await poolQuery(query, [listId])
}

async function createTask ({ title, listId }) {
  const query = 'INSERT INTO tasks (title, listId) VALUES ($1, $2) RETURNING *'
  return await poolQuery(query, [title, listId])
}

async function updateTask ({ id, key, value }) {
  const query = `UPDATE tasks SET ${key} = $1 where id = $2 RETURNING *`
  return await poolQuery(query, [value, id])
}

async function deleteTask (id) {
  const query = 'DELETE FROM tasks WHERE id = $1 RETURNING id'
  return await poolQuery(query, [id])
}

module.exports = {
  createTask,
  readTasks,
  readTasksTitles,
  updateTask,
  deleteTask
}
