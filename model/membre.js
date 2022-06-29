var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Membre= new Schema({

    nom : String,
    prenom: String,
    email:String,
    dateNaiss: Date,
    image: String,
    adresse : String,
    numTel : String,
    password : String,
    isActive :Boolean,
    dateCre:{type:Date,default:Date.now},

});

module.exports = mongoose.model('membre',Membre);