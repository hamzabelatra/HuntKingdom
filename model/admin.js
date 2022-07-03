var mongoose = require('mongoose');
const membre = require('./membre');
const extendSchema = require('./mongoose-extend-schema');

var Schema = mongoose.Schema;

const Admin = extendSchema(membre, {
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    phone: {type: String, required: true}
  });

module.exports = mongoose.model('admin',Admin);