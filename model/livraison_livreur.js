var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var livraison_livreur= new Schema({

    livraison: {

        type: Schema.Types.ObjectId,
        ref: "livraison"
    },

    livreur: {

          type: Schema.Types.ObjectId,
          ref: "livreur"
        }

});

module.exports = mongoose.model('livraison_livreur',livraison_livreur);