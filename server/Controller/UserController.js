const userController = require('../Models/UserSchema')
const Crypto = require('crypto-js')
const Jwt = require('jsonwebtoken');

// signup
const signUp=async (req, res) => {
    req.body.password = Crypto.AES.encrypt(req.body.password, process.env.Crypto_js).toString()
    console.log("req.body", req.body);
    try {
        const existingUser = await userController.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const newUser = new userController(req.body);
        const savedUser = await newUser.save();
        console.log("final answer", savedUser);
        console.log('200 Successful');
        res.status(200).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}


module.exports={signUp};