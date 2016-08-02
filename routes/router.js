var express = require('express');
var router = express.Router();
var Bear = require('../models/bear');
var User = require('../models/user');
var crypto = require('crypto');


router.use(function (req, res, next) {
  console.log('Something is happening.');
  next();
});

router.get('/', function (req, res) {
  res.json({ message: 'hooray! welcome to our api'});
});

router.route('/reg')
    .post(function (req, res) {
        var name = req.body.name,
            password = req.body.password,
            password_re = req.body['password-repeat'];

        if (password_re !== password) {
            res.send('两次输入的密码不一致');
            //res.redirect('/reg');
        }
        var md5 = crypto.createHash('md5'),
            password = md5.update(req.body.password).digest('hex');
        var newUser = new User({
            name: name,
            password: password,
            email: req.body.email
        });
        newUser.save(function (err, newUser) {
            if (err) {
                res.send(err);
            }
            if (newUser) {
                res.send('新建用户成功');
            }
        })
    });

router.route('/bears')
    .post(function (req, res) {

      var bear = new Bear();
      bear.name = req.body.name;

      bear.save(function (err) {
        if (err) {
          res.send(err);
        }
        res.json({
          message: 'Bear created!'
        })
      })
    })
    .get(function (req, res) {
      Bear.find(function (err, bears) {
        if (err) {
          res.send(err);
        }
        res.json(bears);
      })
    });

router.route('/bears/:bear_id')
    .get(function (req, res) {
      Bear.findById(req.params.bear_id, function (err, bear) {
        if (err) {
          res.send(err);
        }
        res.json(bear);
      })
    })
    .put(function (req, res) {
      Bear.findById(req.params.bear_id, function (err, bear) {
        if (err) {
          res.send(err);
        }
        bear.name = req.body.name;
        bear.save(function (err) {
          if (err) {
            res.send(err);
          }
          res.json({ message: 'Bear updated!'});
        })
      })
    })
    .delete(function (req, res) {
      Bear.remove({
        _id: req.params.bear_id
      }, function (err) {
        if (err) {
          res.send(err);
        }
        res.send({ message: 'Successfully deleted'});
      })
    });


module.exports = router;
