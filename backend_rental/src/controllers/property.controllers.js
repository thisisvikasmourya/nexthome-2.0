import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import { Property } from "../models/property.model.js";

const addProperty = asyncHandler(async () => {
  const {
    title,
    description,
    propertytype,
    area,
    address,
    deposit,
    rentaltype,
  } = req.body;

  if (
    !title &&
    !description &&
    !propertytype &&
    !area &&
    !address &&
    !deposit &&
    rentaltype
  ) {
    throw new ApiError(400, "All Field are Required");
  }
  const imagesLocalPath = req.files?.images[0]?.path;
  if (!imagesLocalPath) {
    throw new ApiError(400, "Image is required");
    }
    
});

export { addProperty, updateProperty, deleteProperty };
