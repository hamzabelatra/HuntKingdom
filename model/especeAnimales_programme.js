var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var especeAnimales_programme= new Schema({

    especeAnimales: {
        type: Schema.Types.ObjectId,
        ref: "especeAnimales"
    },

    programme: {
        type: Schema.Types.ObjectId,
        ref: "programme"
    }

});

module.exports = mongoose.model('especeAnimales_programme',especeAnimales_programme);