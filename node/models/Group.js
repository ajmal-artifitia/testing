const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const sampleSchema2 = mongoose.Schema(
  {
    name: {
      type: String,
      uppercase: true,
      required: true,
    },
    items: [
      {
        name: {
          type: ObjectId,
          ref: "Sample",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Groups", sampleSchema2);
