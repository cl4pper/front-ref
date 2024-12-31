export interface User {
  id: string;
  email: string;
  password: string;
  username?: string | null;
  group?: string | null;
}
