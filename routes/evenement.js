var express = require('express');
var evenement = require('../model/evenement');
var router = express.Router();



/* GET evenement listing. */
router.get('/', function(req, res) {
    evenement.find((err, data)=> {
        res.json(data);
    })
});
/* PSOT  evenement category  . */
router.post('/add',function(req,res)
{
    console.log(req.body);
    var evenem= new evenement({
                description: req.body.description,
                dateDeb: req.body.dateDeb,
                dateFin: req.body.dateFin,
                lieu: req.body.lieu,
                image: req.body.image,
                instanceOrg: req.body.instanceOrg,
                isActive: req.body.isActive,



    });
    // console.log("avant");

    evenem.save();
    res.send("Ajout evenement effectué avec succes")
    console.log("evenement ajouté avec succes ");
    console.log(evenem);
});

router.delete('/delete/:id', async(req, res) =>{
    const { id } = req.params;
    await evenement.findByIdAndDelete(id);
    console.log({ id });
    res.send("Suppression evenement effectuée avec succes")
});



router.post('/update/:id', async(req, res)=> {
    const { id } = req.params;
    let result = await evenement.findOne(id)
    if (!result) {
      res.status(404).send("data is not found");
    }
    else {

          result.description = req.body.description;
          result.dateDeb = req.body.dateDeb;
          result.dateFin =  req.body.dateFin;
          result.lieu =  req.body.lieu;
        result.updateOne();
    }
});

module.exports = router;