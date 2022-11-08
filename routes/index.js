
var express = require('express');
var router = express.Router();

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vgs'
})






router.get('/', async(req, res, next)=>{
console.log('ok')
});

router.post('/', (req,res,next) =>{
  var values = [ req.body.name, req.body.prix, req.body.description, req.body.image]
  const requete = 'INSERT INTO jeux_occasions (id_jeu,nom,prix,description,image) VALUES (DEFAULT,?,?,?,?)'
  const request = connection.query(requete, values)
})



module.exports = router;
