var express = require('express');
var categorieProduit = require('../model/categorieProduit');
var router = express.Router();
/* GET product category listing. */
router.get('/', function(req, res) {
  //res.send('from categorieProduit ');
  categorieProduit.find((err, data)=> {
      res.json(data);
  })
});
/* PSOT  product category  . */
router.post('/add',function(req,res)
{
  console.log(req.body);
  var f= new categorieProduit({
    libelle: req.body.libelle,		
    isActive: req.body.isActive,	

  });
 // console.log("avant");

  f.save();
  res.send("Ajout effectué avec succes")
  console.log("Categorie produit ajouté avec succes ");
  console.log(f);
});

router.delete('/delete/:id', async(req, res) =>{
    const { id } = req.params;
    await categorieProduit.findByIdAndDelete(id);
    console.log({ id });
    //res.redirect("/produit")
    res.send("Suppression effectué avec succes")
});

  
module.exports = router;