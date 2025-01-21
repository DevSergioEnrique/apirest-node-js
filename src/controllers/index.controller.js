const { pool } = require("./../db/db.js")

const poolMysql = async (req, res) => {
    const [result] = await pool.promise().query("SELECT 'pene' AS result")
    res.json(result)
}

module.exports = {
    poolMysql
}