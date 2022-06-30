var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorieProduit= new Schema({

    idCat: String,		
    libelle: String,		
    isActive: Boolean,
    produits: [{

      type: Schema.Types.ObjectId,
      ref: "produit"  
    }] 	

});

module.exports = mongoose.model('categorieProduit',CategorieProduit);