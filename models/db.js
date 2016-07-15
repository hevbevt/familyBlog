/**
 * Created by duanhe on 16/7/16.
 */
var setting = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
module.exports = new Db(setting.db, new Server(setting.host, setting.port), {safe: true});