/**
 * Created by duanhe on 16/7/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    password: String,
    email: String
}); 
var User = mongoose.model('User', userSchema);
module.exports = User;
/*
var mongodb = require('./db');

function User(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
}

module.exports = User;

User.prototype.save = function (callback) {
    var user = {
        name: this.name,
        password: this.password,
        email: this.email
    };
    mongodb.open(function (err, db) {
        if (err) {
            return callback(err);
        }

        db.collection('users', function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            collection.insert(user, {
                safe: true
            }, function (err, user) {
                mongodb.close();
                if (err) {
                    return callback(err);
                }
                callback(null, user[0]);
            })
        })
    })
};

User.get = function (name, callback) {
    mongodb.open(function (err, db) {
        if (err) {
            return callback(err);
        }
        db.collection('users', function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            collection.find({
                name: name
            }).toArray(function (err, result) {
                mongodb.close();
                if (err) {
                    return callback(err);
                }
                callback(null, result);
            });
        })
    })
};*/
