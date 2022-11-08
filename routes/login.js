var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const mysql = require('mysql');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vgs'
})
var secret = "secret"
let data = {time: Date()}
router.post('/', (req, res, next) => {
    
    const profRequete = 'SELECT * FROM user WHERE user_email = ?'
    const email = [req.body.email]
    const request =  connection.query(profRequete, email, (err, response) => {
        const comparison =  bcrypt.compare(req.body.password, response[0].user_password,(err,pass)=>{
           if (pass === false) {
            res.send(JSON.stringify("mot de passe éronné"))
           }
           else {
            const token = jwt.sign(data, secret);
            res.send(JSON.stringify(token));
            

           }
        });
    });

    
    
  });
  
  module.exports = router;