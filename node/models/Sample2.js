const mongoose = require("mongoose");
const sampleSchema2 = mongoose.Schema(
  {
    name: {
      type: String,
      uppercase: true,
      required: true,
    },
    admin: {
      type: String,
      ref: "Sample",
    }, aju: {
      type: String,
      ref: "Sample",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Sample2", sampleSchema2);
