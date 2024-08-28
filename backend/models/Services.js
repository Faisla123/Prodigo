import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Duration: {
      type: String,
      required: true,
    },
    Amount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Services = mongoose.model("Services", userSchema);

export default Services;
