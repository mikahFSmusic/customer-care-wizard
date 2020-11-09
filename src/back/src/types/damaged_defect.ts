import { Document } from 'mongoose';

export interface IDamagedDefect extends Document {
  purchaseReceived: string
  orderNumber: string
  vendor: string
  skuNumber: string
  damageLevel: string
  offerDiscount: string
  refundAmount: string
  narvarReturn: string
  itemAmount: string
  damageDescription: string
  actionNeeded: string
  image1: Buffer
  image2: Buffer
  image3: Buffer
}