const {
  ImageUpload,
  test,
  sample,
  sampleget,
  arraychecking,
  addGroup,
  GroupPopulate,
  qrGenerate,
  fetchPrinter,
  thermalPrinter,
} = require("../controller/index.js");

const router = require("express").Router();
const multer = require("multer");
const {
  sendOtp,
  verifyOtp,
  requestOtp,
  otpVerification,
} = require("../controller/otp.js");

//store image in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
//middleware function to upload single image

router.post("/upload", upload.single("image"), ImageUpload);

router.post("/sample", sample);

router.get("/sampleget", sampleget);

router.post("/arraychecking", arraychecking);

router.post("/addGroup", addGroup);

router.post("/GroupPopulate", GroupPopulate);

router.post("/qrGenerate", qrGenerate);

router.get("/fetchPrinter", fetchPrinter);

router.get("/thermalPrinter", thermalPrinter);

router.get("/sendOtp", sendOtp);

router.post("/verifyOtp", verifyOtp);

router.post("/requestOtp", requestOtp);

router.post("/otpVerification", otpVerification);

module.exports = router;
