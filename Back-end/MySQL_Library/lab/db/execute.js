const mysql = require('mysql2/promise')
const connection = mysql.createPool({
    host:'localhost',
    user:'cc9',
    password:'root-bomb-cc9',
    database: 'expense_tracker',
  connectionLimit: 100,
})

const execute = async (sql,params) =>{
    const result = await connection.execute(sql,params)
    return result[0]
}

module.exports = {connection,execute}