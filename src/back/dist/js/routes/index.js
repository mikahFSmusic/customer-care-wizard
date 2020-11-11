"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const damaged_defect_1 = __importDefault(require("../models/damaged_defect"));
const damaged_defect_2 = require("../controllers/damaged_defect");
require("dotenv/config");
const ImageUpload_1 = require("../services/ImageUpload");
const router = express_1.Router();
const singleUpload = ImageUpload_1.upload.single("image");
router.post("/upload-damage-image", function (req, res) {
    const uid = req.params.id;
    singleUpload(req, res, function (error) {
        if (error) {
            return res.json({
                success: false,
                errors: {
                    title: "Image Upload Error",
                    detail: error.message,
                    error: error
                }
            });
        }
        let update = { profilePicture: req.file.fieldname };
        damaged_defect_1.default.findByIdAndUpdate(uid, update, { new: true })
            .then((user) => res.status(200).json({ success: true, user: user }))
            .catch((error) => res.status(400).json({ success: false, error: error }));
    });
});
router.post("/submit-damaged-defect", damaged_defect_2.addDamagedDefect);
router.get("/damaged-defects", damaged_defect_2.getAllDamagedDefects);
router.put("/update-damaged-defect/:id", damaged_defect_2.updateDamagedDefect);
router.delete("/delete-damaged-defect/:id", damaged_defect_2.deleteDamagedDefect);
exports.default = router;
