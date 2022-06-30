var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Evenement= new Schema({

    description: String,		
    dateDeb: Date,		
    dateFin: Date,		
    lieu: String,		
    image: String,		
    instanceOrg: String,	
    isActive: Boolean,
    
    typeEvenement: {
            type: Schema.Types.ObjectId,
            ref: "typeEvenement"
    },

    localisation: {
            type: Schema.Types.ObjectId,
            ref: "localisation"
    },

    facture: [{
            type: Schema.Types.ObjectId,
            ref: "facture"
    }],

    admin: [{
            type: Schema.Types.ObjectId,
            ref: "admin"
    }]

});

module.exports = mongoose.model('evenement',Evenement);