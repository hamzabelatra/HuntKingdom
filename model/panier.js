var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Panier= new Schema({

    idPanier: String,		
    prixTotal:	Number,		
    nbrTotProd:	Number,
    isActive: Boolean,

    commande: {
            type: Schema.Types.ObjectId,
            ref: "commande"
    },

    produit: [{

      type: Schema.Types.ObjectId,
      ref: "produit"  
    }]


});

module.exports = mongoose.model('panier',Panier);