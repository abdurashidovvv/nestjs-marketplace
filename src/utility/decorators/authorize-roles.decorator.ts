import { SetMetadata } from "@nestjs/common";

export const AuthorizeRoles = (...roles: String[]) => SetMetadata('allowedRoles', roles);