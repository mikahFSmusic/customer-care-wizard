interface IDamagedDefect {
  _id: string
  customerData: Object
  orderNumber: string
  vendor: string
  skuNumber: string
  damageLevel: string
  offerDiscount?: string
  refundAmount?: string
  narvarReturn?: string
  itemAmount?: string
  damageDescription?: string
  actionNeeded?: string
  createdAt?: string
  images?: Array<string>
}

interface DamagedDefectProps {
  damaged_defect: IDamagedDefect
}

type ApiDataType = {
  message: string
  status: string
  damaged_defect?: IDamagedDefect
}

declare module '@nivo/sunburst'