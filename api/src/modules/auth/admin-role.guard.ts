import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AdminRoleGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const user = req.user;

    return user?.role_id === 1;
  }
}