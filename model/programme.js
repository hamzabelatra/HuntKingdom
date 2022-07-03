var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Programme= new Schema({

    nomProg: String,		
    description: String,		
    saison:	String,		
    dateOuverture: Date,		
    dateFermeture: Date,		
    regle: String,		
    image: String,		
    isActive: Boolean,

    localisation: {
            type: Schema.Types.ObjectId,
            ref: "localisation"
    },
/*
    especeAnimales: {
        type: Schema.Types.ObjectId,
        ref: "especeAnimales"
    },

    */

});

module.exports = mongoose.model('programme',Programme);