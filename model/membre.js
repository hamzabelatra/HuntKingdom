var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Membre= new Schema({

    nom : String,
    prenom: String,
    email:String,
    dateNaiss: Date,
    image: String,
    adresse : String,
    numTel : String,
    password : String,
    dateCre:{type:Date,default:Date.now},
    isActive :Boolean,



   commande: {
            type: Schema.Types.ObjectId,
            ref: "commande"
    },


    facture: {
        type: Schema.Types.ObjectId,
        ref: "facture"
    },

/*    evenement: {
        type: Schema.Types.ObjectId,
        ref: "evenement"
    }

    */

});

module.exports = mongoose.model('membre',Membre);