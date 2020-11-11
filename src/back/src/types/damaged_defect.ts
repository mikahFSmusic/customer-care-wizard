import { Document } from "mongoose";

export interface IDamagedDefect extends Document {
  purchaseReceived: string;
  orderNumber: string;
  vendor: string;
  skuNumber: string;
  damageLevel: string;
  offerDiscount: string;
  refundAmount: string;
  narvarReturn: string;
  itemAmount: string;
  damageDescription: string;
  actionNeeded: string;
  image1: String;
  image2: String;
  image3: String;
}
