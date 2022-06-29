var express = require('express');
const facture = require('../model/facture');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.post('/add',function(req,res)
{
  console.log(req.body);
  var f= new facture({
    

    dateRecp : req.body.dateRecp
  });
  console.log("avant");

  f.save();
});

module.exports = router;