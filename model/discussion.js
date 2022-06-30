var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Discussion= new Schema({

    message:	String,		
    dateEnvoie:	{type:Date,default:Date.now},
    isActive: Boolean

});

module.exports = mongoose.model('discussion',Discussion);