var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorieProduit= new Schema({

    idCat: String,		
    libelle: String,		
    isActive: Boolean	

});

module.exports = mongoose.model('categorieProduit',CategorieProduit);