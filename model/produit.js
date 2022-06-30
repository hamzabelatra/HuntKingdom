var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Produit= new Schema({

    nomProd: String,		
    dateAjout: {type:Date,default:Date.now},		
    image: String,		
    prix: Number,		
    description: String,	
    quantiteProd: Number,	
	isActive: Boolean,
    categorieProduit: {

      type: Schema.Types.ObjectId,
      ref: "categorieProduit"  
    },

    commentaire: {

      type: Schema.Types.ObjectId,
      ref: "commentaire"  
    }


});

module.exports = mongoose.model('produit',Produit);