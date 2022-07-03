var mongoose = require('mongoose');
const membre = require('./membre');
const extendSchema = require('./mongoose-extend-schema');
var Schema = mongoose.Schema;


const Livreur = extendSchema(membre, {
    moyenLivraison: {type: String, required: true},
    dispo: {type: Boolean, required: true},
    phoisActive: {type: Boolean, required: true},

    /*
    livraison: {

      type: Schema.Types.ObjectId,
      ref: "livraison"  
    }

    */


  });




module.exports = mongoose.model('livreur',Livreur);