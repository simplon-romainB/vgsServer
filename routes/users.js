var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vgs'
})


router.post('/', function(req, res, next) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);
  var values = [ req.body.email, hash, req.body.prenom, req.body.nom, req.body.address, req.body.zipcode, "user"]
  const requete = 'INSERT INTO user (user_id,user_email,user_password,user_firstname, user_lastname, user_address, user_zipcode,userrole) VALUES (DEFAULT,?,?,?,?,?,?,?)'
  const request = connection.query(requete, values)
  res.send(JSON.stringify("vous etes inscrits maintenant"))
})





module.exports = router;
