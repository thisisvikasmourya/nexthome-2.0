import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import { Property } from "../models/property.model.js";

const addProperty = asyncHandler(async (req, res) => {
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
  const images = await uploadOnCloudinary(imagesLocalPath);
  if (!images) {
    throw new ApiError(400, "Images is not Found");
  }
  const owner = req.user?._id;
  if (!owner) {
    throw new ApiError(400, "Owner Not Found");
  }

  const property = await Property.create({
    title,
    description,
    propertytype,
    area,
    address,
    deposit,
    rentaltype,
    images: images.url,
    owner,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, property, "Property Created Successfully"));
});

const getPropertyId = asyncHandler(async (req, res) => {
  const { propertyId } = req.params;
  try {
    const property = await Property.findById(propertyId);
    if (!property) {
      throw new ApiError(400, "Property not found");
    }
    const { title, description, images, rentaltype } = property;
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { title, description, images, rentaltype },
          "Property Found Successfully"
        )
      );
  } catch (error) {
    throw new ApiError(400, "Property Retreival Failed");
  }
});

const updateProperty = asyncHandler(async (req, res) => {
  const { title, description, address } = req.body;
  const { propertyId } = req.params;
  console.log(propertyId);

  const imagesLocalPath = req.file?.path;
  
  if (!imagesLocalPath) {
    throw new ApiError( 400, "Images not Found" );
    
  }
  const images = await uploadOnCloudinary(imagesLocalPath);
  if (!images) {
    throw new ApiError(400, "Error while uploading on Coludinary");
  }

  const property = await Property.findByIdAndUpdate(propertyId, {
    $set: {
      title,
      description,
      address,
      images: images.url,
    },
  });
  console.log(property);
  return res
    .status(200)
    .json(new ApiResponse(200, property, "property Update Successfully"));
});

const deleteProperty = asyncHandler(async (req, res) => {
  const { propertyId } = req.params;
  if (!propertyId) {
    throw new ApiError(400, "Property not Found");
  }
  const property = await Property.findByIdAndDelete(propertyId);
  if (!property) {
    throw new ApiError(400, "Property is missing");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Property Deleted Successfully"));
});

export { addProperty, getPropertyId, updateProperty, deleteProperty };
