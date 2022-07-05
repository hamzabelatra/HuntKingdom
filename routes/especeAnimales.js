const bodyParser = require('body-parser');
var express = require('express');
const categorieEspece = require('../model/categorieEspece');
const especeAnimales = require('../model/especeAnimales');
var router = express.Router();
var EspeceAnimale = require("../model/especeAnimales");


/****************************************************************************/
//begin body-parser
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());
// end body-parser
/****************************************************************************/


/* GET users listing. */
router.get('/', function(req, res, next) {
  EspeceAnimale.find((err, data)=>{
    res.json(data);
  })
});

// ((Ajout))
router.post('/add',async function(req,res){
try{
  var e = new EspeceAnimale({
    // console.log(req.body);
    categorieEspece: req.body.categorieEspece,
    description: req.body.description,		
    isChassable: req.body.isChassable,		
    maniereProt: req.body.maniereProt,		
    methodeChasse: req.body.methodeChasse,		
    image: req.body.image,		
    lieu: req.body.lieu,		
    periodeReprod: req.body.periodeReprod,	
    isActive: req.body.isActive
   });
   await e.save();
   res.send("Ajout effectué avec succès");
}
catch{
  res.send(err);
}


});
// ((fin ajout))

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

// ((update))
router.put('/update/:id', async function(req,res){
  try{
    await EspeceAnimale.findByIdAndUpdate({_id:req.params.id},{
      description: req.body.description,		
      isChassable: req.body.isChassable,		
      maniereProt: req.body.maniereProt,		
      methodeChasse: req.body.methodeChasse,		
      image: req.body.image,		
      lieu: req.body.lieu,		
      periodeReprod: req.body.periodeReprod,	
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
