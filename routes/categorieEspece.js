const bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var CategorieEspece = require("../model/categorieEspece");

/****************************************************************************/
//begin body-parser
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());
// end body-parser
/****************************************************************************/

/* GET users listing. */
router.get('/', function(req, res, next) {
  CategorieEspece.find((err, data)=>{
    res.json(data);
  })
});

//((ajout))
router.post('/add',async function(req,res){
  try{
    var c = new CategorieEspece({
      // console.log(req.body);
      libelle: req.body.libelle,		
      description: req.body.description,			
      isActive: req.body.isActive
     });
     await c.save();
     res.send ("Ajout effectué avec succès")
  }
  catch{
    res.send(err);
  }

});
//((fin ajout))

// ((delete))
router.delete('/delete/:id',async function(req,res){
  try{
await EspeceAnimale.findOneAndDelete({id:req.params.id})
res.send("Elément supprimé avec succès");
  }
  catch (err){
res.send(err);
  }

});
// ((end delete))
//((update))
router.put('/update/:id', async function(req,res){
  try{
    await EspeceAnimale.findByIdAndUpdate({_id:req.params.id},{
      libelle: req.body.libelle,		
      description: req.body.description,			
      isActive: req.body.isActive
    })
    res.send("mise à jours effectuée avec succès")
  }
  catch{
    res.send(err);
  }
})
//((end update))
module.exports = router;
