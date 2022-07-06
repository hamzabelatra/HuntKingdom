var mongoose = require('mongoose');
const membre = require('./membre');
//const extendSchema = require('mongoose-extend-schema');

var Schema = mongoose.Schema;

const Admin = new Schema({

    nom : String,
    prenom: String,
    email: String,
    dateNaiss: String,
    image: String,
    adresse : String,
    numTel : String,
    password : String,
    dateCre : String ,
    dateupdate : Date,  //{type:Date,default:Date.now},
    isActive : Boolean,
    role : String

})


module.exports = mongoose.model('admin',Admin)