import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '../../common/decorators/public.decorator';
import { Reflector } from '@nestjs/core';

@Injectable()
export class LocalLoginGuard extends AuthGuard('local') {}
