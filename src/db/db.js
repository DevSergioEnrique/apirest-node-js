const mysql = require("mysql2") 
const {
    DB_PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} = require("../config/config.js")


const pool = mysql.createPool({
    host: DB_HOST,
    port: DB_PORT, 
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
})

module.exports = { pool }