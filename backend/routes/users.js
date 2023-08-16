const express = require("express");
const User = require("../models/user");
const { dbUrl } = require("../config");
const router = express.Router();
const accountSid = "AC7a17471857ecd9fac3125f6c2fb3c7d8";
const authToken = "2e6b1dc719d5e6e576d1efb646198d87";
const verifySid = "VAd07293872f0efa02faf80ab2b36c19ca";
const client = require("twilio")(accountSid, authToken);

let userDetails = null;

// Route to request OTP and store user details
router.post('/signup', async (req, res) => {
    console.log("in user signup");
    console.log(req.body);

    if (!req.body.hallticketnumber || !req.body.password || !req.body.mobile) {
        res.json({ success: false, error: "Send the hallticketnumber, password, and mobile parameters" });
        return;
    }

    try {
        const { hallticketnumber, firstname, lastname, mobile, password, role } = req.body;

        // Save user details in temporary storage
        userDetails = { hallticketnumber, firstname, lastname, mobile, password, role };

        // Request OTP from Twilio
        const verification = await client.verify.v2.services(verifySid).verifications.create({
            to: mobile,
            channel: "sms",
            // customCode: `Your verification code for canteen app is: ${code}`
        });

        console.log(verification.status);
        res.json({ success: true, message: "OTP sent successfully!" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, error: error.message });
    }
});

// Route to verify OTP and signup user
router.post('/signup/verify', async (req, res) => {
    console.log("in user signup verify");
    console.log(req.body);

    if (!req.body.otp) {
        res.json({ success: false, error: "Send the OTP parameter" });
        return;
    }

    if (!userDetails) {
        res.json({ success: false, error: "User details not found. Request OTP first." });
        return;
    }

    try {
        // Verify the OTP provided by the user
        const verification_check = await client.verify.v2.services(verifySid).verificationChecks.create({
            to: userDetails.mobile,
            code: req.body.otp
        });

        if (verification_check.status !== "approved") {
            res.json({ success: false, error: "Invalid OTP" });
            return;
        }

        // If OTP is valid, proceed with user creation
        const existingUser = await User.findOne({ hallticketnumber: userDetails.hallticketnumber });
        if (existingUser) {
            res.json({ success: false, error: "User already exists" });
            return;
        }

        // Create a new user using the stored user details
        const user = await User.create(userDetails);

        console.log("----------saved");
        res.status(200).json({
            message: 'User added successfully!',
            username: user.username,
            role: user.role,
            success: true
        });

        // Clear the temporary storage after successful user creation
        userDetails = null;
    } catch (error) {
        console.log(error);
        res.json({ success: false, error: error.message });
    }
});

module.exports = router;
