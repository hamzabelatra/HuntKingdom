var express = require('express');
var router = express.Router();
var EspeceAnimale = require("../model/especeAnimales");

/* GET users listing. */
router.get('/', function(req, res, next) {
  EspeceAnimale.find((err, data)=>{
    res.json(data);
  })
});
router.post('/add',function(req,res){
var e = new EspeceAnimale({
 // console.log(req.body);

 description: req.body.description,		
 isChassable: req.body.isChassable,		
 maniereProt: req.body.maniereProt,		
 methodeChasse: req.body.methodeChasse,		
 image: req.body.image,		
 lieu: req.body.lieu,		
 periodeReprod: req.body.periodeReprod,	
 isActive: req.body.isActive
});
e.save();
});

module.exports = router;
