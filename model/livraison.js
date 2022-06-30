var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Livraison= new Schema({

    dateLivraison: Date,		
    lieu: String,		
    isValid: Boolean,	
    isActive: Boolean
});

module.exports = mongoose.model('livraison',Livraison);