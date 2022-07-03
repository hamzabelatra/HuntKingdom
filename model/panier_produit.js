var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var panier_produit= new Schema({

    panier: {

        type: Schema.Types.ObjectId,
        ref: "panier"
    },

       produit: {

          type: Schema.Types.ObjectId,
          ref: "produit"
        }


});

module.exports = mongoose.model('panier_produit',panier_produit);