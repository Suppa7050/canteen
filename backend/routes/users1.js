const express = require("express");
const User = require("../models/user");
// const Tech = require("../models/tech");
const { dbUrl } = require("../config");
const router = express.Router();

router.get('/', (req, res) => {
    res.statusCode = 200;
    console.log("get!!");
    res.send("hello!");
});

router.post('/login', (req, res) => {
    console.log(req);

    if (!req.body.username || !req.body.password) {
        res.json({ success: false, error: "Send the parameters" });
        return;
    }

    User.findOne({ username: req.body.username }).then((user) => {
        if (!user) {
            res.json({ success: false, error: "User does not exist" });
        } else {
            if (user.password !== req.body.password) {
                res.json({ success: false, error: "Password is not correct" });
            } else {
                res.json({ id:user._id, success: true, username: user.username, role: user.role });
            }
        }
    }).catch((err) => {
        res.json({ success: false, error: err });
    });
});

router.post('/signup', (req, res) => {
    console.log("in user signup");
    console.log(req);

    if (!req.body.hallticketnumber || !req.body.password) {
        res.json({ success: false, error: "Send the username and password parameters" });
        return;
    }

    User.findOne({ username: req.body.username }).then((user) => {
        if (!user) {
            User.create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                hallticketnumber: req.body.hallticketnumber,
                mobile:req.body.mobile,
                password: req.body.password,
                role: req.body.role
            }).then((user) => {
                console.log("----------saved");
                res.status(200).json({
                    message: 'User added successfully!',
                    username: user.username,
                    role: user.role,
                    success: true
                });
            });
        } else {
            res.json({ success: false, error: "User already exists" });
            return;
        }
    }).catch((err) => {
        console.log(err);
        res.json({ success: false, error: err });
    });
});




module.exports = router;