import { Router } from "express";
import mongoose from "mongoose";
// import { addDamagedDefect } from '../controllers/damaged_defect'
import path from "path";
import GridFsStorage from "multer-gridfs-storage";
import { Response, Request } from "express";
import { IDamagedDefect } from "../types/damaged_defect";
import DamagedDefectSchema from "../models/damaged_defect";
import crypto from "crypto";
import multer from "multer";
import {
  addDamagedDefect,
  getAllDamagedDefects,
  updateDamagedDefect,
  deleteDamagedDefect
} from "../controllers/damaged_defect";
require("dotenv/config");
const router: Router = Router();

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@maisonettecluster0.p8m37.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const storage = new GridFsStorage({
  url: uri,
  file: (req, file) => {
    console.log("file being stored.");
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "dduploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

router.post(
  "/submit-damaged-defect",
  upload.array("file", 1),
  async (req: Request, res: Response, next): Promise<void> => {
    try {
      const body = req.body as Pick<
        IDamagedDefect,
        | "purchaseReceived"
        | "orderNumber"
        | "vendor"
        | "skuNumber"
        | "damageLevel"
        | "offerDiscount"
        | "refundAmount"
        | "narvarReturn"
        | "itemAmount"
        | "damageDescription"
        | "actionNeeded"
        | "image1"
        | "image2"
        | "image3"
      >;
      const files = req.files;
      console.log(body);
      console.log(files);
      const damagedDefect: IDamagedDefect = new DamagedDefectSchema({
        purchaseReceived: body.purchaseReceived,
        orderNumber: body.orderNumber,
        vendor: body.vendor,
        skuNumber: body.skuNumber,
        damageLevel: body.damageLevel,
        offerDiscount: body.offerDiscount,
        refundAmount: body.refundAmount,
        narvarReturn: body.narvarReturn,
        itemAmount: body.itemAmount,
        damageDescription: body.damageDescription,
        actionNeeded: body.actionNeeded,
        image1: req.files,
      });

      const newDamagedDefect: IDamagedDefect = await damagedDefect.save();

      res.status(201).json({ message: "Form submitted", newDamagedDefect });
      console.log("form submitted to server");
    } catch (error) {
      throw error;
    }
  }
);

router.get("/damaged-defects", getAllDamagedDefects);

router.put("/update-damaged-defect/:id", updateDamagedDefect);

router.delete("/delete-damaged-defect/:id", deleteDamagedDefect);

export default router;
