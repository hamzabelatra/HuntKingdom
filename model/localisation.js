var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Localisation= new Schema({

    Lieu: String,		
    lattitude: String,		
    longitude: String,
    isActive: Boolean,
    
    programme: {
            type: Schema.Types.ObjectId,
            ref: "programme"
    }

});

module.exports = mongoose.model('localisation',Localisation);