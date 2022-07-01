var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorieEspece= new Schema({

    libelle : String,
    description: String,
    isActive :Boolean,

   especeAnimales: [{

      type: Schema.Types.ObjectId,
      ref: "especeAnimales"  
    }] 

});

module.exports = mongoose.model('categorieEspece',CategorieEspece);