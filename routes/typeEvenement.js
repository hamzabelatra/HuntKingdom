var express = require('express');
var typeEvenement = require('../model/typeEvenement');
const evenement = require("../model/evenement");
var router = express.Router();




/* GET typeEvenement listing. */
router.get('/', function(req, res) {
    typeEvenement.find((err, data)=> {
        res.json(data);
    })
});
/* PSOT  typeEvenement category  . */
router.post('/add',function(req,res)
{
    console.log(req.body);
    var typeEven= new typeEvenement({


        libelle : req.body.libelle,
        obligatoire : req.body.obligatoire,
        nbrPartMax :  req.body.nbrPartMax,
        nbrPartMin :  req.body.nbrPartMin,
        isLimited : req.body.isLimited,
        isActive: req.body.isActive,





    });
    // console.log("avant");

    typeEven.save();
    res.send("Ajout typeEvenement effectué avec succes")
    console.log("typeEvenement ajouté avec succes ");
    console.log(typeEven);
});

router.delete('/delete/:id', async(req, res) =>{
    const { id } = req.params;
    await typeEvenement.findByIdAndDelete(id);
    console.log({ id });
    res.send("Suppression typeEvenement effectuée avec succes")
});



router.post('/update/:id', async(req, res)=> {
    const { id } = req.params;
    let result = await typeEvenement.findOne(id)
    if (!result) {
        res.status(404).send("data is not found");
    }
    else {

        result.libelle = req.body.libelle;
        result.obligatoire = req.body.obligatoire;
        result.nbrPartMax =  req.body.nbrPartMax;
        result.nbrPartMin =  req.body.nbrPartMin;
        result.isLimited = req.body.isLimited;
    //    result.isActive : req.body.isActive

        result.updateOne();
    }
});








module.exports = router;