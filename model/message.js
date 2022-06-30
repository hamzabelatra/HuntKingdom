var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Message= new Schema({

    message: String,		
    isChassable: Boolean,	
    dateEnvoi: Date,
    isActive: Boolean,

    membre: {

      type: Schema.Types.ObjectId,
      ref: "membre"  
    }
});

module.exports = mongoose.model('message',Message);