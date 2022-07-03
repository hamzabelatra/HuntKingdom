var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var evenement_membre= new Schema({



    evenement: {
        type: Schema.Types.ObjectId,
        ref: "evenement"
    },


    membre: {
        type: Schema.Types.ObjectId,
        ref: "membre"
    }


});

module.exports = mongoose.model('evenement_membre',evenement_membre);