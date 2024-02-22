import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {addProperty,updateProperty,deleteProperty,getPropertyId} from "../controllers/property.controllers.js"

const router = express.Router();


router.route("/add-property").post(
  verifyJWT,upload.fields([
    { name: "images", maxCount: 1 },
  ]),
  addProperty
);

router.route("/update-property/:propertyId").patch(verifyJWT,upload.single("images"),updateProperty);
router.route( "/delete-property/:propertyId" ).delete( deleteProperty )
router.route("/get-property/:propertyId").get(getPropertyId);

export default router