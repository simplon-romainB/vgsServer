var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')
const mysql = require('mysql')
const jwt = require('jsonwebtoken');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vgs'
})
let secret = "secret" //NE PAS OUBLIER DE METTRE DANS UNE VARIABLE D'ENVIRONNEMENT

router.put('/', function(req, res, next) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var values = [ req.body.email, hash, req.body.prenom, req.body.nom, req.body.address, req.body.zipcode, req.body.country,req.body.email]
    const requete = 'UPDATE user SET user_email = ?, user_password= ?, user_firstname = ?, user_lastname = ?, user_address = ?, user_zipcode = ?, user_country = ? WHERE user_email = ?'
    const request = connection.query(requete, values)
    const comparison =  jwt.verify(req.header('Authorization'), secret)
             if (comparison === false) {
              return res.status(401).send(error)
             }
             else {
              res.send("ok")
              
             }
    
  });

  module.exports = router; 