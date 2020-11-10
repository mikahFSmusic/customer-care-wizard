import { IDamagedDefect } from "./../types/damaged_defect";
import { model, Schema } from "mongoose";

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

    image1: {
      data: Buffer,
    },

    image2: {
      data: Buffer,
    },

    image3: {
      data: Buffer,
    },
  },
  { timestamps: true }
);

export default model<IDamagedDefect>("damaged_defect", DamagedDefectSchema);
