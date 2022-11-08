var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vgs'
})


router.get('/', function(req, res, next) {
  const search = req.query.marque
  const values = [search]
  const requete = "SELECT * FROM consoles WHERE marque LIKE ? ;"
  const request = connection.query(requete, values, (err,response)=>{
    res.send(response)
    
  })
  
  
})



module.exports = router; 