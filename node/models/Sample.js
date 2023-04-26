const mongoose = require("mongoose");
const sampleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      uppercase: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Sample", sampleSchema);
