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

    rentaltype: {
      type: String,
      required: true,
      enum: ["sale", "rent"],
      default: "sale",
    },
    thumbnail: {
      type: String,
      required: true,
    },
    video: {
      type: String,
    },
    views: {
      type: Number,
    },
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
