import { Router } from "express";
import {
  addDamagedDefect,
  getAllDamagedDefects,
  updateDamagedDefect,
  deleteDamagedDefect,
  uploadDamageImage,
  sendEmail
} from "../controllers/damaged_defect";
import { upload } from '../services/image_upload'

const router: Router = Router();

router.post("/upload-damage-image", upload.array("images", 3), uploadDamageImage)

router.post("/submit-damaged-defect", addDamagedDefect);

router.get("/damaged-defects", getAllDamagedDefects);

router.put("/update-damaged-defect/:id", updateDamagedDefect);

router.delete("/delete-damaged-defect/:id", deleteDamagedDefect);

router.get("/send-dd-emails", sendEmail)

export default router;
