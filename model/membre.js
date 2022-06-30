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

    commentaire: [{

      type: Schema.Types.ObjectId,
      ref: "commentaire"  
    }],
    message: [{

      type: Schema.Types.ObjectId,
      ref: "message"  
    }],


    evenement: [{
            type: Schema.Types.ObjectId,
            ref: "evenement"
    }],

    facture: [{
            type: Schema.Types.ObjectId,
            ref: "facture"
    }]

});

module.exports = mongoose.model('membre',Membre);