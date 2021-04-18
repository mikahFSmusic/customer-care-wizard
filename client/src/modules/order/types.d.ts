interface IOrder {
  meta: Meta;
  links: Links;
  data?: DataEntity[] | null;
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
interface DataEntity {
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
  paymentDetails?: (PaymentDetailsEntity | null)[] | null;
  credits?: (CreditsEntity | null)[] | null;
  refunds?: null[] | null;
  reimbursements?: (ReimbursementsEntity | null)[] | null;
  returnAuthorizations?: null[] | null;
  returnItems?: null[] | null;
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
  giftMessage?: string | null;
  recipientEmail?: string | null;
  wrapped: boolean;
}
interface ShipmentsEntity {
  shipmentNumber: string;
  tracking?: string | null;
  shipmentState: string;
  eta: string;
  shippingMethod: string;
  stockLocationName: string;
  carrier_code?: string | null;
  trackingUrl?: string | null;
}
interface PaymentDetailsEntity {
  name: string;
  state: string;
  source_type: string;
  amount: string;
}
interface CreditsEntity {
  amount: string;
  type: string;
  memo: string;
  reimbursementNumber: string;
}
interface ReimbursementsEntity {
  number: string;
  total: string;
  reimbursementStatus: string;
  customerReturnNumber?: null;
}
interface Custom {
  giftMessageTxt?: string | null;
  giftRecipientEmailStr?: string | null;
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
