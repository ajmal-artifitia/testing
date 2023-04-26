const asyncHandler = require("express-async-handler");
const QRCode = require("qrcode");
const Sample = require("../models/Sample");
const {
  uploadFile,
  deleteFile,
  getObjectSignedUrl,
} = require("../s3-functions/s3");
const sharp = require("sharp");
const crypto = require("crypto");
const Sample2 = require("../models/Sample2");
const ArrayObjects = require("../models/ArrayObjects");
const Group = require("../models/Group");
const find = require("local-devices");

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

exports.ImageUpload = asyncHandler(async (req, res) => {
  const file = req.file;
  const imageName = generateFileName();
  const fileBuffer = await sharp(file.buffer)
    .resize({ height: 1920, width: 1080, fit: "contain" })
    .toBuffer();
  await uploadFile(fileBuffer, imageName, file.mimetype);
  const url = await getObjectSignedUrl(imageName);
  res.status(200).json({ message: "Upload Successfully..!" });
});

exports.sample = asyncHandler(async (req, res) => {
  await new Sample2({
    ...req.body,
  }).save();
  res.status(200).json({ message: " Success..!" });
});
exports.sampleget = asyncHandler(async (req, res) => {
  const data = await Sample2.find().populate("admin").populate("aju");
  res.status(200).json(data);
});
exports.arraychecking = asyncHandler(async (req, res) => {
  await new ArrayObjects({
    ...req.body,
  }).save();
  res.status(200).json({ message: "skljufjusdlkjhfdfh" });
});
exports.addGroup = asyncHandler(async (req, res) => {
  await new Group({
    ...req.body,
  }).save();
  res.status(200).json({ message: "ghfgh" });
});
exports.GroupPopulate = asyncHandler(async (req, res) => {
  const data = await Group.find().populate("items.name");
  res.status(200).json(data);
});
exports.qrGenerate = asyncHandler(async (req, res) => {
  const url = req.body.url;
  if (url.length === 0) {
    return res.json({ message: "empty" });
  }
  QRCode.toDataURL(url, function (err, url) {
    console.log(url);
    res.json(url);
  });
  res.status(200).json(data);
});

exports.fetchPrinter = asyncHandler(async (req, res) => {
  find().then((devices) => {
    console.log(devices);
  });
});

exports.thermalPrinter = asyncHandler(async (req, res) => {







  
});
