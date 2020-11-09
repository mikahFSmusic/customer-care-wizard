interface IDamagedDefect {
  _id: string
  purchaseReceived: string
  orderNumber: string
  vendor: string
  skuNumber: string
  damageLevel: string
  offerDiscount: string
  refundAmount?: string
  narvarReturn?: string
  itemAmount?: string
  damageDescription?: string
  actionNeeded?: string
  createdAt?: string
  image1?: Buffer
  image2?: Buffer
  image3?: Buffer
}

interface DamagedDefectProps {
  damaged_defect: IDamagedDefect
}

type ApiDataType = {
  message: string
  status: string
  damaged_defect?: IDamagedDefect
}