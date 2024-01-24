import mongoose, { Schema } from "mongoose";

/* The code is defining a Mongoose schema for a comment. */
const commentSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    content: {
      type: String,
      required: true,
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
  },
  { timestamps: true }
);

export default Comment = mongoose.model("Comment", commentSchema);
