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


    admin: {
            type: Schema.Types.ObjectId,
            ref: "admin"
    },


/*    membre: {
        type: Schema.Types.ObjectId,
        ref: "membre"
    }*/


});

module.exports = mongoose.model('evenement',Evenement);