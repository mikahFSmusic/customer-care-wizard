import { IDamagedDefect } from "./../types/damaged_defect";
import { model, Schema } from "mongoose";

const DamagedDefectSchema = new Schema(
  {
    customerData: {
      type: Object
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
      type: [String],
    }
  },
  { timestamps: true }
);

export default model<IDamagedDefect>("damaged_defect", DamagedDefectSchema);
