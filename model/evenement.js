var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Evenement= new Schema({

    description: String,		
    dateDeb: Date,		
    dateFin: Date,		
    lieu: String,		
    image: String,		
    instanceOrg: String,	
    isActive: Boolean
});

module.exports = mongoose.model('evenement',Evenement);