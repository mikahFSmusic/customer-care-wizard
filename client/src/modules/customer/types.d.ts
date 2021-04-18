interface ICustomerData {
  data: Data;
}
interface Data {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: Relationships;
  links: Links;
}
interface Attributes {
  name: string;
  displayName: string;
  displayColor: string;
  displayIcon: string;
  externalIds?: null[] | null;
  sharedExternalIds?: null[] | null;
  signedUpAt?: null;
  avatarUrl?: null;
  username?: null;
  emails?: EmailsEntity[] | null;
  sharedEmails?: null[] | null;
  phones?: PhonesEntity[] | null;
  sharedPhones?: null[] | null;
  whatsapps?: null[] | null;
  facebookIds?: null[] | null;
  instagramIds?: null[] | null;
  socials?: null[] | null;
  sharedSocials?: null[] | null;
  urls?: null[] | null;
  locations?: LocationsEntity[] | null;
  activeUsers?: null[] | null;
  watchers?: null[] | null;
  recentLocation: RecentLocation;
  locale: string;
  timeZone?: null;
  birthdayAt?: null;
  gender?: null;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  lastSeenAt?: null;
  lastActivityAt: string;
  lastCustomerActivityAt: string;
  deleted: boolean;
  lastMessageIn: LastMessageIn;
  lastMessageOut: LastMessageOut;
  lastMessageUnrespondedTo: SentimentOrLastMessageUnrespondedTo;
  lastMessageAt: string;
  lastConversation: LastConversation;
  conversationCounts: ConversationCounts;
  preview: Preview;
  tags?: null[] | null;
  sentiment: Sentiment;
  custom: Custom;
  progressiveStatus: string;
  verified: boolean;
  rev: number;
  recentItems?: RecentItemsEntity[] | null;
  satisfactionLevel: SatisfactionLevel;
  roleGroupVersions?: null[] | null;
  accessOverride?: null[] | null;
  firstName: string;
  lastName: string;
}
interface EmailsEntity {
  type: string;
  verified: boolean;
  email: string;
}
interface PhonesEntity {
  type: string;
  verified: boolean;
  phone: string;
}
interface LocationsEntity {
  type: string;
  address: string;
  cityName: string;
  countryName: string;
  regionName: string;
  zipCode: string;
}
interface RecentLocation {
  updatedAt: string;
}
interface LastMessageIn {
  sentiment?: null;
  channel: string;
  sentAt: string;
}
interface LastMessageOut {
  sentAt: string;
}
interface SentimentOrLastMessageUnrespondedTo {}
interface LastConversation {
  sentiment: SentimentOrLastMessageUnrespondedTo;
  channels?: string[] | null;
  tags?: null[] | null;
  id: string;
}
interface ConversationCounts {
  done: number;
  open: number;
  snoozed: number;
  all: number;
}
interface Preview {
  $init: boolean;
  channel: string;
  subject: string;
  text: string;
  type: string;
  previewAt: string;
}
interface Sentiment {
  polarity: number;
  confidence: number;
}
interface Custom {
  zendeskUserIdStr: string;
  lastOrderNumberStr: string;
  lifetimeValueNum: number;
  storeCreditBalanceNum: number;
}
interface RecentItemsEntity {
  meta: Meta;
  updatedAt: string;
  type: string;
  id: string;
}
interface Meta {
  klassName: string;
}
interface SatisfactionLevel {
  firstSatisfaction: FirstSatisfactionOrLastSatisfaction;
  lastSatisfaction: FirstSatisfactionOrLastSatisfaction;
  count: number;
}
interface FirstSatisfactionOrLastSatisfaction {
  sentByTeams?: string[] | null;
  conversation: string;
  formResponse: string;
  form: string;
  channel: string;
  status: string;
  scheduledFor: string;
  createdAt: string;
  sentAt: string;
  updatedAt: string;
  sentBy: string;
}
interface Relationships {
  messages: Messages;
  createdBy: CreatedByOrModifiedByOrOrg;
  modifiedBy: CreatedByOrModifiedByOrOrg;
  org: CreatedByOrModifiedByOrOrg;
  orders: Orders;
}
interface Messages {
  links: Links;
}
interface Links {
  self: string;
}
interface CreatedByOrModifiedByOrOrg {
  links: Links;
  data: Data1;
}
interface Data1 {
  type: string;
  id: string;
}
interface Orders {
  links: Links;
  meta: Meta1;
}
interface Meta1 {
  kobject: boolean;
}
