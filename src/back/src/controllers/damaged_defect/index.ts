import fs from "fs";
import path from "path";
import multer from "multer";
import { Response, Request } from "express";
import { IDamagedDefect } from "../../types/damaged_defect";
import DamagedDefectSchema from "../../models/damaged_defect";

// Get all DD submissions
const getAllDamagedDefects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const damagedDefects: IDamagedDefect[] = await DamagedDefectSchema.find();
    res.status(200).json({ damagedDefects });
  } catch (error) {
    throw error;
  }
};

// Add new DD form
const addDamagedDefect = async (req: Request, res: Response): Promise<void> => {
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
    const file = req.file;
    console.log(body);
    console.log(file);
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
      // image1: { data: fs.readFileSync(path.join(__dirname + '/uploads' + req.file.filename)) },
      // image2: { data: fs.readFileSync(path.join(__dirname + '/uploads' + req.file.filename)) },
      // image3: { data: fs.readFileSync(path.join(__dirname + '/uploads' + req.file.filename)) }
      image1: file,
    });

    const newDamagedDefect: IDamagedDefect = await damagedDefect.save();

    res.status(201).json({ message: "Form submitted", newDamagedDefect });
    console.log("form submitted to server");
  } catch (error) {
    throw error;
  }
};

// Update DD form

const updateDamagedDefect = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateDamagedDefect: IDamagedDefect | null = await DamagedDefectSchema.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allDamagedDefects: IDamagedDefect[] = await DamagedDefectSchema.find();
    res.status(200).json({
      message: "Damaged Defect Submission Updated",
      damagedDefect: updateDamagedDefect,
      damagedDefects: allDamagedDefects,
    });
  } catch (error) {
    throw error;
  }
};

// Delete DD form entry

const deleteDamagedDefect = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedDamagedDefect: IDamagedDefect | null = await DamagedDefectSchema.findByIdAndRemove(
      req.params.id
    );
    const allDamagedDefects: IDamagedDefect[] = await DamagedDefectSchema.find();
    res.status(200).json({
      message: "Damaged Defect Entry Deleted.",
      damagedDefect: deletedDamagedDefect,
      damagedDefects: allDamagedDefects,
    });
  } catch (error) {
    throw error;
  }
};

export {
  getAllDamagedDefects,
  addDamagedDefect,
  updateDamagedDefect,
  deleteDamagedDefect,
};
