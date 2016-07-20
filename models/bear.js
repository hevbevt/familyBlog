/**
 * Created by duanhe on 16/7/19.
 */
var mongoose = require('mongoose');
var Schma = mongoose.Schema;
var BearSchma = new Schma({
    name : String
});
module.exports = mongoose.model('Bear', BearSchma);