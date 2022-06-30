var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Livreur= new Schema({

    moyenLivraison:	String,		
    dispo: Boolean,
    isActive: Boolean		

});

module.exports = mongoose.model('livreur',Livreur);