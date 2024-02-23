import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Favourite } from "../models/favourite.model.js";

const addToFavourite = asyncHandler(async (req, res) => {
  const { name, description, propertyId } = req.body;

  if (!name && !description && !propertyId) {
    throw new ApiError(400, "All Field are Required");
  }
  const owner = req.user;
  if (!owner) {
    throw new ApiError(400, "Owner Not Found");
  }
  const favourite = await Favourite.create({
    name,
    description,
    property: propertyId,
    owner,
  });
  if (!favourite) {
    throw new ApiError(400, "favourite ceation Failed");
  }
  return res
    .status(201)
    .json(new ApiResponse(201, favourite, "favourite Created Successfully"));
});
const updateAddToFavourite = asyncHandler( async ( req, res ) =>
{
    // const {}
    const {favouriteId} = req.params
});
const getAddToFavourite = asyncHandler(async (req, res) => {});
const deleteAddToFavourite = asyncHandler(async (req, res) => {});

export {
  addToFavourite,
  updateAddToFavourite,
  getAddToFavourite,
  deleteAddToFavourite,
};
