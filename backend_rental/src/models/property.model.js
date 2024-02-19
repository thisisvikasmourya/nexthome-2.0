import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deposit: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    propertytype: {
      type: String,
      required: true,
    },

    rentaltype: {
      type: String,
      required: true,
      enum: ["sale", "rent"],
      default: "sale",
    },
    images: {
      type: String,
      required: true,
    },
    // video: {
    //   type: String,
    // },

    isPublished: {
      type: Boolean,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default Property = mongoose.model("Property", propertySchema);
