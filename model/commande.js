var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Commande= new Schema({

    quantite: Number,		
    dateCre:{type:Date,default:Date.now},
    isActive: Boolean,

    livraison: {

      type: Schema.Types.ObjectId,
      ref: "livraison"  
    },

    facture: {
            type: Schema.Types.ObjectId,
            ref: "facture"
    },

    membre: {
            type: Schema.Types.ObjectId,
            ref: "membre"
    },

    panier: {
            type: Schema.Types.ObjectId,
            ref: "panier"
    }

});

module.exports = mongoose.model('commande',Commande);