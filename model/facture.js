var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Facture= new Schema({

    dateRecp: Date,
    isActive: Boolean,

    membre: {
            type: Schema.Types.ObjectId,
            ref: "membre"
    },
    commande: {
            type: Schema.Types.ObjectId,
            ref: "commande"
    },

    livreur: {

      type: Schema.Types.ObjectId,
      ref: "livreur"  
    }


});

module.exports = mongoose.model('facture',Facture);