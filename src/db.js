const dbConfig = require("../config/Config");
const mysql = require('mysql');

//DB Connection
const connection = mysql.createConnection(dbConfig);
//open MySql connection
connection.connect(error=>{
    if(error) throw error;
    console.log('Successfully connected to the database.')
})

module.exports = connection;