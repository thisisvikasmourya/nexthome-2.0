import mongoose, { Schema } from "mongoose";

const communitySchema = new Schema({}, { timestamps: true });

export default Community = mongoose.model("Community", communitySchema);
