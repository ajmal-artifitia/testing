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

module.exports = router;
