var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Facture= new Schema({

    dateRecp: Date,
    isActive: Boolean,

    commande: {
        type: Schema.Types.ObjectId,
        ref: "commande"
    },
    livreur: {

        type: Schema.Types.ObjectId,
        ref: "livreur"
    }



    /*    membre: {
            type: Schema.Types.ObjectId,
            ref: "membre"
    },

    */





});

module.exports = mongoose.model('facture',Facture);