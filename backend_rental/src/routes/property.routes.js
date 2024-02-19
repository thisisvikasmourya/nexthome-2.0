import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {addProperty,updateProperty,deleteProperty,getPropertyId} from "../controllers/property.controllers.js"

const router = express.Router();


router.route("/add-property").post(
  upload.fields([
    { name: "images", maxCount: 1 },
  ]),
  addProperty
);

router.route( "/update-proerty" ).patch( updateProperty )
router.route( "/delete-property" ).delete( deleteProperty )
router.route( "/get-property" ).get( getPropertyId )

export default router