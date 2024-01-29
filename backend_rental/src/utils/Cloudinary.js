import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFileUpload) => {
  try {
    if (!localFileUpload) return null;
    const response = await cloudinary.uploader.upload(localFileUpload, {
      resource_type: "auto",
    });
    fs.unlinkSync(localFileUpload);
    return response;
  } catch (error) {
    fs.unlinkSync(localFileUpload);
    return null;
  }
};

export { uploadOnCloudinary };
