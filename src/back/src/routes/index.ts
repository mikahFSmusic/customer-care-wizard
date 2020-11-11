import { Router } from "express";
import {
  addDamagedDefect,
  getAllDamagedDefects,
  updateDamagedDefect,
  deleteDamagedDefect,
  uploadDamageImage
} from "../controllers/damaged_defect";
require("dotenv/config");

const router: Router = Router();

router.post("/upload-damage-image", uploadDamageImage)

router.post("/submit-damaged-defect", addDamagedDefect);

router.get("/damaged-defects", getAllDamagedDefects);

router.put("/update-damaged-defect/:id", updateDamagedDefect);

router.delete("/delete-damaged-defect/:id", deleteDamagedDefect);

export default router;
