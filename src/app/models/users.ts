export interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
}

export interface UserDTO {
  FirstName: string;
  LastName: string;
  ID: string;
  Email: string;
  Friends: string[];
}
