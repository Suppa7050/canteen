const accountSid = "AC7a17471857ecd9fac3125f6c2fb3c7d8";
const authToken = "fa830c114f2926f4b32759b74cb43992";
const verifySid = "VAd07293872f0efa02faf80ab2b36c19ca";
const client = require("twilio")(accountSid, authToken);

(async () => {
  try {
    const verification = await client.verify
      .v2.services(verifySid)
      .verifications.create({ to: "+919949145496", channel: "sms" });
    console.log(verification.status);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question("Please enter the OTP:", async (otpCode) => {
      const verification_check = await client.verify
        .v2.services(verifySid)
        .verificationChecks.create({ to: "+919949145496", code: otpCode });
      console.log(verification_check.status);
      readline.close();
    });
  } catch (error) {
    console.error(error);
  }
})();
