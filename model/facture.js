var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Facture= new Schema({

    dateRecp: Date,
    isActive: Boolean

});

module.exports = mongoose.model('facture',Facture);