const expressAsyncHandler = require("express-async-handler");

const serviceSID = process.env.serviceSID;
const accountSID = process.env.accountSID;
const authToken = process.env.authToken;
const client = require("twilio")(accountSID, authToken);

const otpVerify = require("./otpVerify");

exports.sendOtp = expressAsyncHandler(async (req, res) => {
  const data = await otpVerify.doSms({ phoneNumber: 8113928182 });
  res.status(200).json({ message: " Success..!" });
});

exports.verifyOtp = expressAsyncHandler(async (req, res) => {
  const { phoneNumber, otp } = req.body;
  const data = await otpVerify.otpVerify(
    { otp: 1490 },
    { phoneNumber: 8113928182 }
  );
  if (data.valid) {
    return res.status(200).json({
      message: "Correct OTP",
    });
  }
  return res.status(400).json({
    message: "Incorrect OTP",
  });
});

exports.requestOtp = expressAsyncHandler(async (req, res) => {
  const { number } = req.body;
  client.verify
    .services(serviceSID)
    .verifications.create({
      to: `+91${number}`,
      channel: "sms",
    })
    .then((response) => {
      res.status(200).json({ message: "otp sended" });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ message: "Otp not send." });
    });
});

exports.otpVerification = expressAsyncHandler(async (req, res) => {
  try {
    const { otp, number } = req.body;
    client.verify
      .services(process.env.serviceSID)
      .verificationChecks.create({
        to: `+91${number}`,
        code: otp,
      })
      .then((respone) => {
        if (response.status === "approved")
          return res.status(200).json({ messaage: "success" });
        res.status(500).json({ message: "inva" });
      })
      .catch((error) => {
        res.status(400).json({ message: "invalid otp" });
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});
