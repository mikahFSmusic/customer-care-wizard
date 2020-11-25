import { Document } from "mongoose";

export interface IDamagedDefect extends Document {
  customerData: Object;
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
  images: Array<string>;
}
