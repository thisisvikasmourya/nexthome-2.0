import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
  {
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
    likedby: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    community: {
      type: Schema.Types.ObjectId,
      ref: "Community",
    },
  },
  { timestamps: true }
);

export default Like = mongoose.model("Like", likeSchema);
