import { Router } from "express";
import { IDamagedDefect } from "../types/damaged_defect";
import DamagedDefectSchema from "../models/damaged_defect";
import {
  addDamagedDefect,
  getAllDamagedDefects,
  updateDamagedDefect,
  deleteDamagedDefect
} from "../controllers/damaged_defect";
require("dotenv/config");

import { upload } from '../services/image_upload'

const router: Router = Router();
const singleUpload = upload.single("image");

router.post("/upload-damage-image", function(req, res) {
  const uid = req.params.id
  singleUpload(req, res, function(error:any) {
    if (error) {
      return res.json({
        success:false,
        errors: {
          title: "Image Upload Error",
          detail: error.message,
          error: error
        }
      })
    }
    let update = { profilePicture: req.file.fieldname }
    DamagedDefectSchema.findByIdAndUpdate(uid, update, {new: true})
      .then((user) => res.status(200).json({ success: true, user: user }))
      .catch((error) => res.status(400).json({ success: false, error: error }))
  })
})

router.post("/submit-damaged-defect", addDamagedDefect);

router.get("/damaged-defects", getAllDamagedDefects);

router.put("/update-damaged-defect/:id", updateDamagedDefect);

router.delete("/delete-damaged-defect/:id", deleteDamagedDefect);

export default router;
