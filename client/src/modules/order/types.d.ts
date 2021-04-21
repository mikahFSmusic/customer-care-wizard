interface IOrderList {
  meta: Meta;
  links: Links;
  data?: IOrder[] | null;
}
interface Meta {
  pageSize: number;
  page: number;
}
interface Links {
  self: string;
  first: string;
  prev?: null;
  next?: null;
}

interface IOrder {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: Relationships;
  links: LinksOrLink;
}
interface Attributes {
  externalId: string;
  title: string;
  icon: string;
  images?: null[] | null;
  data: Data;
  custom: Custom;
  tags?: null[] | null;
  updatedAt: string;
  createdAt: string;
  rev: number;
  roleGroupVersions?: null[] | null;
}
interface Data {
  orderNumber: string;
  email: string;
  shippingAddress: ShippingAddressOrBillingAddress;
  billingAddress: ShippingAddressOrBillingAddress;
  lineItemDetails?: LineItemDetailsEntity[] | null;
  giftDetails: GiftDetails;
  shipments?: ShipmentsEntity[] | null;
  paymentTotal: string;
  paymentDetails?: PaymentDetailsEntity[] | null;
}
interface ShippingAddressOrBillingAddress {
  address: string;
  city: string;
  zipcode: string;
  state: string;
  country: string;
}
interface LineItemDetailsEntity {
  shipmentNumber: string;
  sku: string;
  maisonetteSku: string;
  vendorSku: string;
  quantityOrdered: number;
  quantityShipped: number;
  quantityCanceled: number;
  quantityReturned: number;
  images: string;
  monogram?: null;
}
interface GiftDetails {
  giftMessage: string;
  recipientEmail: string;
  wrapped: boolean;
}
interface ShipmentsEntity {
  shipmentNumber: string;
  tracking: string;
  shipmentState: string;
  eta: string;
  shippingMethod: string;
  stockLocationName: string;
  carrier_code: string;
  trackingUrl: string;
}
interface PaymentDetailsEntity {
  name: string;
  state: string;
  source_type: string;
  amount: string;
}
interface Custom {
  giftMessageTxt: string;
  giftRecipientEmailStr: string;
  giftWrappedBool: boolean;
  totalPaymentNum: number;
}
interface Relationships {
  org: OrgOrCustomer;
  klass: Klass;
  customer: OrgOrCustomer;
}
interface OrgOrCustomer {
  links: LinksOrLink;
  data: Data1;
}
interface LinksOrLink {
  self: string;
}
interface Data1 {
  type: string;
  id: string;
}
interface Klass {
  link: LinksOrLink;
  data: Data1;
}
