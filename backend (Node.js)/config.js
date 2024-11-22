require("dotenv").config();
const mysql = require("mysql2")

const urlDB = 'mysql://root:wbKIOwmYxZgBQAGzzqxNZEStrMJkkaDU@mysql-59t8.railway.internal:3306/railway'

const connection = mysql.createConnection(
    urlDB
);

module.exports = connection;