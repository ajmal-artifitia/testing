const mongoose = require("mongoose");
const sampleSchema2 = mongoose.Schema(
  {
    name: {
      type: String,
      uppercase: true,
      required: true,
    },
    array: [
      {
        name: {
          type: String,
        },
        age: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ArrayObjects", sampleSchema2);
