import { Role, UserStatus } from "./enums";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: UserStatus;
  mustResetPassword: boolean;
}

export interface JwtPayload {
  sub: string;
  role: Role;
  name: string;
}
