var express = require('express');
var router = express.Router();
var CategorieEspece = require("../model/categorieEspece");

/* GET users listing. */
router.get('/', function(req, res, next) {
  CategorieEspece.find((err, data)=>{
    res.json(data);
  })
});
router.post('/add',function(req,res){
var c = new CategorieEspece({
 // console.log(req.body);
 libelle: req.body.libelle,		
 description: req.body.description,			
 isActive: req.body.isActive
});
c.save();
});

module.exports = router;
