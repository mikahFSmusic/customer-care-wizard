import { IDamagedDefect } from "./../types/damaged_defect";
import { model, Schema } from "mongoose";
import express from 'express'
import { MulterError } from "multer";

const DamagedDefectSchema = new Schema(
  {
    purchaseReceived: {
      type: String,
    },

    orderNumber: {
      type: String,
    },

    vendor: {
      type: String,
    },

    skuNumber: {
      type: String,
    },

    damageLevel: {
      type: String,
    },

    offerDiscount: {
      type: String,
    },

    refundAmount: {
      type: String,
    },

    narvarReturn: {
      type: String,
    },

    itemAmount: {
      type: String,
    },

    damageDescription: {
      type: String,
    },

    actionNeeded: {
      type: String,
    },

    images: {
      type: [Object],
    }
  },
  { timestamps: true }
);

export default model<IDamagedDefect>("damaged_defect", DamagedDefectSchema);
