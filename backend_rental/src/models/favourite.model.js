import mongoose, { Schema } from "mongoose";

const favouriteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    propertys: {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default Favourite = mongoose.model("Favourite", favouriteSchema);
