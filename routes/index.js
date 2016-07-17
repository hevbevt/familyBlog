var crypto = require('crypto'),
    User = require('../models/user.js');
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {
            title: '主页',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        });
    });
    app.get('/reg', function (req, res) {
        res.render('reg', {
            title: '注册',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        });
    });
    app.post('/reg', function (req, res) {
        var name = req.body.name,
            password = req.body.password,
            password_re = req.body['password-repeat'];
        //检验两次密码输入是否一致
        if (password !== password_re) {
            req.flash('error', '两次输入的密码不一致');
            return res.redirect('/reg');
        }
        //生成密码的md5值
        var md5 = crypto.createHash('md5');
        password = md5.update(req.body.password).digest('hex');
        var newUser = new User({
            name: name,
            password: password,
            email: req.body.email
        });
        User.get(newUser.name, function (err, result) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            if (result.length !== 0) {
                req.flash('error', '用户已存在');
                return res.redirect('/reg');
            }
            newUser.save(function (err, user) {
                if (err) {
                    req.flash('error', err);
                    return res.redirect('/req');
                }
                req.session.user = newUser;
                req.flash('success', '注册成功');
                res.redirect('/');
            })
        })
    });
    app.get('/login', function (req, res) {
        res.render('login', {
            title: '登陆',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        });
    });
    app.post('/login', function (req, res) {
        var md5 = crypto.createHash('md5'),
            password = md5.update(req.body.password).digest('hex');
        User.get(req.body.name, function (err, result) {
            if (result.length === 0) {
                req.flash('error', '用户不存在');
                return res.redirect('/login');
            }
            if (result.length === 1) {
                if(password != result[0].password) {
                    req.flash('error', '密码错误');
                    return res.redirect('/login');
                }
                req.session.user = result[0];
                req.flash('success', '登陆成功');
                res.redirect('/');
            }
        });
    });
    app.get('/post', function (req, res) {
        res.render('post', {title: '发表'});
    });
    app.post('/post', function (req, res) {

    });
    app.get('/logout', function (req, res) {
        req.session.user = null;
        req.flash('success', '登出成功!');
        res.redirect('/');//登出成功后跳转到主页
    });
};