require('dotenv/config')
module.exports = {
  dbConnectionObj: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
  },
  port: process.env.PORT
}
