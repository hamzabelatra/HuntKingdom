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
    }
});

module.exports = mongoose.model('commande',Commande);