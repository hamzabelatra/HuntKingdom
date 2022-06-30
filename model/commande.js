var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Commande= new Schema({

    quantite: Number,		
    dateCre:{type:Date,default:Date.now},
    isActive: Boolean
});

module.exports = mongoose.model('commande',Commande);