export interface Journal {
  Message: string;
  Date: number;
  Title: string;
  Mood: string;
  UserID: string;
  Privacy: PrivacyEnum;
}

export enum PrivacyEnum {
  Public = 'Public',
  Private = 'Private',
}
