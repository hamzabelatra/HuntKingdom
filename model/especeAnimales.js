var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EspeceAnimales= new Schema({

    description: String,		
    isChassable: Boolean,		
    maniereProt: String,		
    methodeChasse: String,		
    image: String,		
    lieu: String,		
    periodeReprod: String,	
    isActive: String
});

module.exports = mongoose.model('especeAnimales',EspeceAnimales);