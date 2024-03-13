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

// signin
const signIn = async (req, res) => {
    try {
        const DB = await userController.findOne({ email: req.body.email });
        !DB && res.status(401).json({ response: 'Please check Your Email' });

        const updatedata = await userController.findById(DB._id)
        const hashedPassword = Crypto.AES.decrypt(DB.password, process.env.Crypto_js);
        const originalPassword = hashedPassword.toString(Crypto.enc.Utf8);
        originalPassword !== req.body.password && res.status(401).json({ response: "Password and Email don't match" });

        await userController.findByIdAndUpdate(DB._id, { $set: { lastLogin: Date.now() } });

        const accessToken = Jwt.sign({ id: DB._id }, process.env.Jwt_Key, { expiresIn: '1d' });
        const { password, ...others } = updatedata._doc;
        console.log('200 Successful');
        res.status(200).json({ ...others, accessToken });
    } catch (error) {
        res.status(500).json(error);
    }
};



module.exports={signUp, signIn};