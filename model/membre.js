var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Membre= new Schema({

    nom : String,
    prenom: String,
    email: String,
    dateNaiss: String,
    image: String,
    adresse : String,
    numTel : String,
    password : String,
    dateCre : Date , 
    dateupdate : Date, 
    isActive : Boolean,
    role : String,

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
    }],

   commande: [{
            type: Schema.Types.ObjectId,
            ref: "commande"
    }]

});

module.exports = mongoose.model('membre',Membre);