var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Panier= new Schema({

    idPanier: String,		
    prixTotal:	Number,		
    nbrTotProd:	Number,
    isActive: Boolean
});

module.exports = mongoose.model('panier',Panier);