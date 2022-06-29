var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Facture= new Schema({

    dateRecp: Date
});

module.exports = mongoose.model('facture',Facture);