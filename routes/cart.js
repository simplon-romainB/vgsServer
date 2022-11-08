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

const secret = "secret"

router.post('/', function(req, res, next) {
    const profRequete = 'INSERT INTO panier (designation, prix, quantite, image, email) VALUES ?'
    let info = []
    for (var i = 0; i < req.body.length; i ++) {
        info.push(req.body[i])
    }
    const infos = [info]
    const request =  connection.query(profRequete, infos, (err, response) => {
        const comparison =  jwt.verify(req.header('Authorization'), secret)
           if (comparison === false) {
            return res.status(401).send(error)
           }
           else {
            res.send(response)
            console.log()
           }
        })   
    });



module.exports = router; 