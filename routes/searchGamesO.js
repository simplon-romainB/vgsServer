var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vgs'
})


router.post('/', function(req, res, next) {
  const page = ((req.query.page)*10) - 10
  const search = req.query.search
  const platform0 = "%"+req.body[0]+"%"
  const platform1 = "%"+req.body[1]+"%"
  const platform2 = "%"+req.body[2]+"%"
  const values = [platform0, platform1, platform2, search, page]
  const requete = "SELECT * FROM jeux_occasions WHERE (jeuxplateforme LIKE  ? OR jeuxplateforme LIKE ? OR jeuxplateforme LIKE ?) AND nom LIKE ? LIMIT 10 OFFSET ?;"
  const request = connection.query(requete, values, (err,response)=>{
    res.send(response)
    
  })
  
  
})



module.exports = router; 