import mongoose, { Schema } from "mongoose";

/* The code is defining a Mongoose schema for a "Community" model. */
const communitySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default Community = mongoose.model("Community", communitySchema);
