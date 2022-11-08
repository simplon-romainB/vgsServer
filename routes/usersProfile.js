var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vgs'
})
const secret = "secret"

router.post('/', function(req, res, next) {
    const profRequete = 'SELECT * FROM user WHERE user_email = ?'
    const email = [req.body.email]
    
    const request =  connection.query(profRequete, email, (err, response) => {
        const comparison =  jwt.verify(req.header('Authorization'), secret)
           if (comparison === false) {
            return res.status(401).send(error)
           }
           else {
            res.send(response)
            
           }
        })   
    });

module.exports = router; 
