var express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

// connect Mysql
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'project'
})
connection.connect()

// path of api in Mysql
app.get('/project', function (req, res,next){
    // query 
    connection.query('SELECT * FROM project', function (error, results, fields){
        if (error) throw error;
        res.json(results)
    });
})

// port number
app.listen(3333, function(){
    console.log('Port number is 3333')
})
