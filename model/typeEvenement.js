var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TypeEvenement= new Schema({

    libelle: String,		
    obligatoire: Boolean,		
    nbrPartMax:	Number,		
    nbrPartMin:	Number,		
    isLimited:	Boolean,
    isActive: Boolean,


});

module.exports = mongoose.model('typeEvenement',TypeEvenement);