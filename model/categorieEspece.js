var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorieEspece= new Schema({

    libelle : String,
    description: String,
    isActive :Boolean

});

module.exports = mongoose.model('categorieEspece',CategorieEspece);