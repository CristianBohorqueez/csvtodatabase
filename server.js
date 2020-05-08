const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

    var mysql = require('mysql');
    
    var con = mysql.createConnection({
        host: "http://localhost:5500/",
        user: "root",
        password: "123456",
        database: "datos"
        });
    
    con.connect(function(err) {
        console.log('🖐', err)
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    });

